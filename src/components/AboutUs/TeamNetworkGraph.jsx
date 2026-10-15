// 3D people–project network (three.js via 3d-force-graph). Loaded lazily by TeamNetwork.
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";
import { initials, memberAnchor, projectRole } from "./TeamSection";

const TEX = 128;
const PERSON_RING = "#2EC1D9";
const PROJECT_RING = "#F5B942";

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// A round sprite: the photo/screenshot cropped into a circle with a coloured ring; initials until the image loads.
function circleSprite(src, label, ring, size) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = TEX;
  const ctx = canvas.getContext("2d");
  const r = TEX / 2;
  const paint = (img) => {
    ctx.clearRect(0, 0, TEX, TEX);
    ctx.save();
    ctx.beginPath();
    ctx.arc(r, r, r - 6, 0, Math.PI * 2);
    ctx.clip();
    if (img) {
      const s = Math.min(img.width, img.height);
      // cover-crop; screenshots keep their top (header/hero), portraits their centre
      const sy = img.height > img.width ? (img.height - s) / 2 : 0;
      ctx.drawImage(img, (img.width - s) / 2, sy, s, s, 6, 6, TEX - 12, TEX - 12);
    } else {
      const g = ctx.createLinearGradient(0, 0, TEX, TEX);
      g.addColorStop(0, "#0F3B47");
      g.addColorStop(1, "#179FB5");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, TEX, TEX);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 44px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(initials(label), r, r + 2);
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(r, r, r - 4, 0, Math.PI * 2);
    ctx.lineWidth = 7;
    ctx.strokeStyle = ring;
    ctx.stroke();
  };
  paint(null);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  if (src) {
    const img = new Image();
    img.onload = () => { paint(img); texture.needsUpdate = true; };
    img.src = src;
  }
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthWrite: false }));
  sprite.scale.set(size, size, 1);
  return sprite;
}

export function buildGraph(members, projects) {
  const visible = (projects || []).filter((p) => !p.hidden);
  const byId = new Map(visible.map((p) => [p.id, p]));
  const counts = new Map();
  const links = [];
  (members || []).forEach((m) => (m.projectIds || []).forEach((pid) => {
    if (!byId.has(pid)) return;
    counts.set(pid, (counts.get(pid) || 0) + 1);
    links.push({ source: `m:${m.name}`, target: `p:${pid}`, role: projectRole(m, pid) });
  }));
  const people = (members || []).filter((m) => (m.projectIds || []).some((pid) => byId.has(pid)));
  const nodes = [
    ...people.map((m) => ({ id: `m:${m.name}`, kind: "member", member: m, label: m.name, sub: m.role })),
    ...visible.filter((p) => counts.get(p.id)).map((p) => ({
      id: `p:${p.id}`, kind: "project", project: p, label: p.title,
      sub: `${counts.get(p.id)} contributor${counts.get(p.id) > 1 ? "s" : ""}`, weight: counts.get(p.id),
    })),
  ];
  return { nodes, links, stats: { people: people.length, projects: nodes.length - people.length, links: links.length } };
}

export default function TeamNetworkGraph({ members, projects, height }) {
  const el = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const host = el.current;
    if (!host) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { nodes, links } = buildGraph(members, projects);
    let hovered = null;
    let fitted = false;
    let interacting = false;
    const isLinked = (l) => hovered && (l.source.id === hovered.id || l.target.id === hovered.id || l.source === hovered.id || l.target === hovered.id);

    const graph = ForceGraph3D({ controlType: "orbit" })(host)
      .backgroundColor("rgba(0,0,0,0)")
      .showNavInfo(false)
      .width(host.clientWidth)
      .height(height)
      .graphData({ nodes, links })
      .nodeThreeObject((n) => n.kind === "member"
        ? circleSprite(n.member.image, n.label, PERSON_RING, 14)
        : circleSprite(n.project.imageDesktop || n.project.desktopImages?.[0], n.label, PROJECT_RING, 11 + Math.min(n.weight, 11) * 1.1))
      .nodeLabel((n) => `<div style="padding:6px 10px;border-radius:10px;background:rgba(0,17,24,.88);color:#fff;font:12px/1.35 Inter,sans-serif;text-align:center">
          <b>${escapeHtml(n.label)}</b><br/><span style="color:${n.kind === "member" ? PERSON_RING : PROJECT_RING}">${escapeHtml(n.sub)}</span></div>`)
      .linkLabel((l) => (l.role ? `<div style="padding:4px 8px;border-radius:8px;background:rgba(0,17,24,.88);color:#fff;font:11px Inter,sans-serif">${escapeHtml(l.role)}</div>` : ""))
      .linkColor((l) => (isLinked(l) ? "rgba(132,212,225,0.95)" : "rgba(132,212,225,0.28)"))
      .linkWidth((l) => (isLinked(l) ? 0.9 : 0.25))
      .linkOpacity(0.9)
      .linkDirectionalParticles(reduceMotion ? 0 : 1)
      .linkDirectionalParticleWidth((l) => (isLinked(l) ? 1.6 : 0.8))
      .linkDirectionalParticleSpeed(0.004)
      .linkDirectionalParticleColor(() => "#84D4E1")
      .onNodeHover((n) => {
        hovered = n || null;
        host.style.cursor = n ? "pointer" : "grab";
        graph.linkColor(graph.linkColor()).linkWidth(graph.linkWidth()).linkDirectionalParticleWidth(graph.linkDirectionalParticleWidth());
      })
      .onNodeClick((n) => {
        if (n.kind === "project") navigate(`/projects?projectId=${n.project.id}`);
        else {
          const card = document.getElementById(memberAnchor(n.member));
          if (card) {
            card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
            card.focus?.();
            window.history.replaceState(null, "", `#${memberAnchor(n.member)}`);
          }
        }
      })
      .cooldownTicks(160)
      .onEngineStop(() => {
        if (!fitted) { fitted = true; graph.zoomToFit(reduceMotion ? 0 : 800, 30); }
      });

    graph.d3Force("charge").strength(-60);
    graph.d3Force("link").distance(34);
    const controls = graph.controls();
    controls.enableZoom = false; // don't hijack page scrolling
    controls.addEventListener("start", () => { interacting = true; });
    controls.addEventListener("end", () => { interacting = false; });
    graph.cameraPosition({ z: 220 });

    let angle = 0;
    let raf = 0;
    const spin = () => {
      if (!interacting && !hovered) {
        angle += 0.0016;
        const { x, z } = graph.cameraPosition();
        const dist = Math.hypot(x, z) || 260;
        graph.cameraPosition({ x: dist * Math.sin(angle), z: dist * Math.cos(angle) });
      }
      raf = requestAnimationFrame(spin);
    };
    if (!reduceMotion) raf = requestAnimationFrame(spin);

    // Pause rendering while off-screen.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? graph.resumeAnimation() : graph.pauseAnimation()));
    io.observe(host);
    const ro = new ResizeObserver(() => graph.width(host.clientWidth));
    ro.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      graph._destructor?.();
      host.innerHTML = "";
    };
  }, [members, projects, height, navigate]);

  return <div ref={el} aria-hidden="true" className="w-full" style={{ height, cursor: "grab" }} />;
}
