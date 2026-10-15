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
  // depthTest off + a high renderOrder: circles always draw over the lines, never hidden behind them
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthWrite: false, depthTest: false }));
  sprite.renderOrder = 10;
  sprite.scale.set(size, size, 1);
  sprite.userData.size = size;
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
    ...people.map((m) => {
      const n = (m.projectIds || []).filter((pid) => byId.has(pid)).length;
      return { id: `m:${m.name}`, kind: "member", member: m, label: m.name, sub: m.role,
        extra: `Collaborated on ${n} project${n === 1 ? "" : "s"}` };
    }),
    ...visible.filter((p) => counts.get(p.id)).map((p) => ({
      id: `p:${p.id}`, kind: "project", project: p, label: p.title,
      sub: `${counts.get(p.id)} contributor${counts.get(p.id) > 1 ? "s" : ""}`, weight: counts.get(p.id),
      extra: "Click to view the project",
    })),
  ];
  return { nodes, links, stats: { people: people.length, projects: nodes.length - people.length, links: links.length } };
}

export default function TeamNetworkGraph({ members, projects, height }) {
  const el = useRef(null);
  const zoomApi = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const host = el.current;
    if (!host) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { nodes, links } = buildGraph(members, projects);
    let hovered = null;
    let fitted = false;
    let settled = false;
    let interacting = false;
    const isLinked = (l) => hovered && (l.source.id === hovered.id || l.target.id === hovered.id || l.source === hovered.id || l.target === hovered.id);

    const graph = ForceGraph3D({ controlType: "orbit" })(host)
      .backgroundColor("rgba(0,0,0,0)")
      .showNavInfo(false)
      .width(host.clientWidth)
      .height(height)
      .graphData({ nodes, links })
      .nodeThreeObject((n) => n.kind === "member"
        ? circleSprite(n.member.image, n.label, PERSON_RING, 19)
        : circleSprite(n.project.imageDesktop || n.project.desktopImages?.[0], n.label, PROJECT_RING, 14 + Math.min(n.weight, 11) * 1.3))
      .nodeLabel((n) => `<div style="padding:6px 10px;border-radius:10px;background:rgba(0,17,24,.88);color:#fff;font:12px/1.35 Inter,sans-serif;text-align:center">
          <b>${escapeHtml(n.label)}</b><br/><span style="color:${n.kind === "member" ? PERSON_RING : PROJECT_RING}">${escapeHtml(n.sub)}</span>
          ${n.extra ? `<br/><span style="color:#B8D9E0;font-size:11px">${escapeHtml(n.extra)}</span>` : ""}</div>`)
      .linkLabel((l) => (l.role ? `<div style="padding:4px 8px;border-radius:8px;background:rgba(0,17,24,.88);color:#fff;font:11px Inter,sans-serif">${escapeHtml(l.role)}</div>` : ""))
      .linkColor((l) => (isLinked(l) ? "rgba(132,212,225,0.95)" : "rgba(132,212,225,0.28)"))
      .linkWidth((l) => (isLinked(l) ? 0.5 : 0))
      .linkOpacity(0.9)
      .linkDirectionalParticles(reduceMotion ? 0 : 1)
      .linkDirectionalParticleWidth((l) => (isLinked(l) ? 1.6 : 0.8))
      .linkDirectionalParticleSpeed(0.004)
      .linkDirectionalParticleColor(() => "#84D4E1")
      .onNodeHover((n) => {
        if (hovered?.__threeObj && hovered !== n) {
          const o = hovered.__threeObj; o.renderOrder = 10; o.scale.setScalar(o.userData.size); o.scale.z = 1;
        }
        if (n?.__threeObj) {
          const o = n.__threeObj; o.renderOrder = 20; o.scale.set(o.userData.size * 1.25, o.userData.size * 1.25, 1);
        }
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
      .onNodeDrag(() => { interacting = true; })
      .onNodeDragEnd((n) => {
        n.fx = n.x; n.fy = n.y; n.fz = n.z; // stay where dropped
        interacting = false;
        idleUntil = performance.now() + 3000;
      })
      .warmupTicks(120) // lay the network out before the first frame
      .cooldownTicks(60)
      .onEngineTick(() => {
        if (!fitted) { fitted = true; fit(0); } // warm-up already laid it out: frame it on the first frame
      })
      .onEngineStop(() => {
        if (!settled) { settled = true; fit(reduceMotion ? 0 : 700); }
      });

    graph.d3Force("charge").strength(-60);
    graph.d3Force("link").distance(34);
    const controls = graph.controls();
    controls.minDistance = 40;
    controls.maxDistance = 1200;
    controls.zoomSpeed = 0.8;
    // Wheel zoom only after the visitor clicks/taps into the graph, so scrolling the page never gets trapped.
    controls.enableZoom = false;
    const arm = () => { controls.enableZoom = true; };
    const disarm = () => { controls.enableZoom = false; };
    host.addEventListener("pointerdown", arm);
    host.addEventListener("touchstart", arm, { passive: true });
    host.addEventListener("pointerleave", disarm);
    controls.enableDamping = true; // glide to a stop instead of halting abruptly
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.7;
    let idleUntil = 0; // auto-rotate waits a few seconds after the visitor lets go
    controls.addEventListener("start", () => { interacting = true; });
    controls.addEventListener("end", () => { interacting = false; idleUntil = performance.now() + 3000; });

    // Frame the whole network: a sphere around every node, sized for the narrower field of view,
    // so nothing is cut off at any rotation angle.
    graph.cameraPosition({ z: 320 });
    const center = new THREE.Vector3();
    let fitDist = 300;
    function fit(ms = 600) {
      const ns = graph.graphData().nodes.filter((n) => Number.isFinite(n.x));
      if (!ns.length) return;
      // centre of the bounding box (an average would sit off-centre for a lopsided layout)
      const box = new THREE.Box3().setFromPoints(ns.map((n) => new THREE.Vector3(n.x, n.y, n.z)));
      box.getCenter(center);
      const cam = graph.camera();
      const dir = new THREE.Vector3().subVectors(cam.position, controls.target).normalize();
      if (!Number.isFinite(dir.x) || dir.lengthSq() === 0) dir.set(0, 0, 1);
      // Fit by where nodes actually land on screen: move the camera until every node sits inside
      // 80% of the frame (room for circles and rotation), measured from this viewing angle.
      const probe = cam.clone();
      probe.aspect = host.clientWidth / height; // the live camera's aspect can lag a resize
      probe.updateProjectionMatrix();
      const pts = ns.map((n) => new THREE.Vector3(n.x, n.y, n.z));
      let dist = fitDist;
      for (let i = 0; i < 4; i++) {
        probe.position.copy(center).addScaledVector(dir, dist);
        probe.lookAt(center);
        probe.updateMatrixWorld();
        const ext = pts.map((v) => { const q = v.clone().project(probe); return Math.max(Math.abs(q.x), Math.abs(q.y)); })
          .sort((x, y) => x - y);
        const e = ext[ext.length - 1];
        if (!Number.isFinite(e) || e <= 0) break;
        dist = THREE.MathUtils.clamp(dist * (e / 0.8), controls.minDistance, controls.maxDistance);
      }
      fitDist = dist;
      const pos = center.clone().add(dir.multiplyScalar(fitDist));
      graph.cameraPosition({ x: pos.x, y: pos.y, z: pos.z }, { x: center.x, y: center.y, z: center.z }, ms);
    }
    zoomApi.current = {
      zoom: (factor) => {
        const cam = graph.camera();
        const offset = new THREE.Vector3().subVectors(cam.position, controls.target);
        const len = THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance);
        offset.setLength(len);
        const pos = controls.target.clone().add(offset);
        graph.cameraPosition({ x: pos.x, y: pos.y, z: pos.z }, controls.target, 300);
      },
      reset: () => fit(600),
    };

    let raf = 0;
    const yAxis = new THREE.Vector3(0, 1, 0);
    const spin = () => {
      if (fitted && !interacting && !hovered && performance.now() > idleUntil) {
        // Orbit around the network's centre at the current distance (respects the visitor's zoom).
        const cam = graph.camera();
        const offset = new THREE.Vector3().subVectors(cam.position, controls.target).applyAxisAngle(yAxis, 0.0016);
        cam.position.copy(controls.target).add(offset);
        cam.lookAt(controls.target);
      }
      raf = requestAnimationFrame(spin);
    };
    if (!reduceMotion) raf = requestAnimationFrame(spin);

    // Pause rendering while off-screen.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? graph.resumeAnimation() : graph.pauseAnimation()));
    io.observe(host);
    const ro = new ResizeObserver(() => { graph.width(host.clientWidth); if (fitted) requestAnimationFrame(() => fit(0)); });
    ro.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointerdown", arm);
      host.removeEventListener("touchstart", arm);
      host.removeEventListener("pointerleave", disarm);
      io.disconnect();
      ro.disconnect();
      graph._destructor?.();
      host.innerHTML = "";
    };
  }, [members, projects, height, navigate]);

  const btn = "w-[40px] h-[40px] rounded-full bg-white/10 border border-white/20 text-white text-lg leading-none hover:bg-white/20 backdrop-blur flex items-center justify-center";
  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={el} aria-hidden="true" className="w-full h-full overflow-hidden" style={{ cursor: "grab" }} />
      <div className="absolute right-3 bottom-3 flex flex-col gap-2">
        <button type="button" className={btn} aria-label="Zoom in" onClick={() => zoomApi.current?.zoom(0.75)}>+</button>
        <button type="button" className={btn} aria-label="Zoom out" onClick={() => zoomApi.current?.zoom(1.33)}>−</button>
        <button type="button" className={`${btn} text-[11px] font-semibold`} aria-label="Reset view" onClick={() => zoomApi.current?.reset()}>Fit</button>
      </div>
    </div>
  );
}
