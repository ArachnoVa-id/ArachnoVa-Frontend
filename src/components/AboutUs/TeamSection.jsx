import { useT } from "@/lib/i18n";
import { useState } from "react";
import { FiLinkedin, FiGlobe, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const gradientColors = [
  "from-purple-400 to-pink-400", "from-blue-400 to-teal-400",
  "from-orange-400 to-red-400", "from-green-400 to-cyan-400",
  "from-yellow-400 to-orange-400", "from-pink-400 to-rose-400",
  "from-indigo-400 to-purple-400", "from-teal-400 to-green-400",
  "from-red-400 to-yellow-400", "from-cyan-400 to-blue-400",
  "from-rose-400 to-pink-400", "from-emerald-400 to-teal-400",
  "from-violet-400 to-purple-400", "from-amber-400 to-orange-400",
  "from-lime-400 to-emerald-400",
];

// Projects shown before "+N more"; keeps every card the same height until a visitor expands one.
const VISIBLE_PROJECTS = 4;

export function initials(name) {
  const parts = (name || "?").trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export function memberAnchor(member) {
  return `member-${(member.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export function projectRole(member, projectId) {
  return member.projectRoles?.[String(projectId)] || "";
}

// Photo when one is set and loads; otherwise an initials avatar (never a page-sized tile).
function Avatar({ member, i }) {
  const [broken, setBroken] = useState(false);
  if (member.image && !broken) {
    return (
      <img alt={member.name} src={member.image} loading="lazy" draggable="false" onError={() => setBroken(true)}
        className="w-[88px] h-[88px] rounded-full object-cover ring-4 ring-white shadow-md" />
    );
  }
  return (
    <div aria-hidden="true"
      className={`w-[88px] h-[88px] rounded-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} ring-4 ring-white shadow-md flex items-center justify-center`}>
      <span className="text-white text-2xl lg:text-3xl font-bold">{initials(member.name)}</span>
    </div>
  );
}

function ProfileIcon({ href, icon: Icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
      className="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-gray-50 border border-gray-200 text-gray-500 hover:bg-LightBlue-c hover:border-LightBlue-c hover:text-white transition-colors">
      <Icon size={17} aria-hidden="true" />
    </a>
  );
}

function ProjectTile({ project, role }) {
  // the project's logo when it has one; otherwise a crop of its screenshot
  const thumb = project.logo || project.imageDesktop || project.desktopImages?.[0] || project.imageMobile || "";
  const body = (
    <>
      <span className={`w-[36px] h-[36px] shrink-0 rounded-lg overflow-hidden flex items-center justify-center ${project.logo ? "bg-white border border-gray-200" : "bg-gradient-to-br from-LightBlue-a to-LightBlue-d"}`}>
        {thumb ? (
          <img src={thumb} alt="" loading="lazy" draggable="false"
            className={project.logo ? "w-full h-full object-contain p-[3px]" : "w-full h-full object-cover object-top"} />
        ) : (
          <span aria-hidden="true" className="text-white text-[11px] font-bold">{initials(project.title)}</span>
        )}
      </span>
      <span className="min-w-0 text-left leading-tight">
        <span className="block text-[12px] font-semibold text-gray-800 truncate">{project.title}</span>
        {role && <span className="block text-[11px] text-LightBlue-d truncate">{role}</span>}
      </span>
    </>
  );
  const cls = "flex items-center gap-2 min-w-0 p-1.5 rounded-xl bg-gray-50 border border-gray-100";
  if (project.hidden) return <li className={cls}>{body}</li>;
  return (
    <li className="min-w-0">
      <Link to={`/projects?projectId=${project.id}`}
        className={`${cls} hover:border-LightBlue-a hover:bg-[#EEF9FB] transition-colors`}>
        {body}
      </Link>
    </li>
  );
}

function MemberCard({ member, i, projects }) {
  const t = useT();
  const [expanded, setExpanded] = useState(false);
  const memberProjects = (member.projectIds || [])
    .map((id) => (projects || []).find((p) => p.id === id))
    .filter(Boolean);
  const shown = expanded ? memberProjects : memberProjects.slice(0, VISIBLE_PROJECTS);
  const more = memberProjects.length - shown.length;
  const socials = [
    member.linkedin && { href: member.linkedin, icon: FiLinkedin, label: `${member.name} on LinkedIn` },
    member.github && { href: member.github, icon: FiGithub, label: `${member.name} on GitHub` },
    member.website && { href: member.website, icon: FiGlobe, label: `${member.name}'s website` },
  ].filter(Boolean);

  return (
    <article id={memberAnchor(member)} tabIndex={-1}
      className="scroll-mt-[110px] flex flex-col min-w-0 rounded-2xl bg-white border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg target:ring-2 target:ring-LightBlue-c focus:outline-none focus-visible:ring-2 focus-visible:ring-LightBlue-c">
      <div className="h-[64px] bg-gradient-to-br from-[#0B2530] via-[#0F3B47] to-LightBlue-d" aria-hidden="true" />
      <div className="flex flex-col items-center text-center px-4 -mt-[44px]">
        <Avatar member={member} i={i} />
        <h4 className="mt-3 text-[15px] lg:text-base font-bold text-gray-900 leading-snug line-clamp-2 min-h-[2.6em] flex items-center">{member.name}</h4>
        <p className="text-[13px] text-gray-500 line-clamp-1">{member.role}</p>
        <div className="flex justify-center gap-2 mt-3 min-h-[44px]">
          {socials.map((s) => <ProfileIcon key={s.label} {...s} />)}
        </div>
      </div>

      <div className="flex-1 flex flex-col px-3 pt-3 pb-4 mt-3 border-t border-gray-100">
        <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-semibold mb-2 px-1">
          {memberProjects.length ? t({ en: `${memberProjects.length} project${memberProjects.length > 1 ? "s" : ""}`, id: `${memberProjects.length} proyek` }) : t({ en: "Projects", id: "Proyek" })}
        </p>
        {memberProjects.length ? (
          <ul className="grid grid-cols-1 gap-1.5 content-start min-h-[222px]">
            {shown.map((p) => <ProjectTile key={p.id} project={p} role={projectRole(member, p.id)} />)}
          </ul>
        ) : (
          <p className="min-h-[222px] text-[12px] text-gray-400 px-1">{t({ en: "Projects coming soon.", id: "Proyek segera hadir." })}</p>
        )}
        {memberProjects.length > VISIBLE_PROJECTS && (
          <button type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}
            className="mt-2 min-h-[44px] text-[12px] font-semibold text-LightBlue-d hover:text-LightBlue-e">
            {expanded ? t({ en: "Show less", id: "Tampilkan lebih sedikit" }) : t({ en: `+${more} more project${more > 1 ? "s" : ""}`, id: `+${more} proyek lainnya` })}
          </button>
        )}
      </div>
    </article>
  );
}

export default function TeamSection({ members, projects }) {
  const t = useT();
  if (!members?.length) return null;

  const internal = members.filter((m) => m.type === "internal");
  const collaborator = members.filter((m) => m.type === "collaborator");
  const both = internal.length > 0 && collaborator.length > 0;

  const renderGroup = (title, items) => (
    <div className="mb-14 last:mb-0">
      {both && (
        <h3 className="text-center font-SourceSansProBold lg:text-2xl text-xl text-neutral-g mb-8">{title}</h3>
      )}
      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 max-w-[72rem] mx-auto items-stretch">
        {items.map((member, i) => (
          <MemberCard key={member.name || i} member={member} i={i} projects={projects} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="w-full bg-white-MainPage lg:py-20 py-16 lg:px-24 px-4">
      <div className="text-center mb-12">
        <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          {t({ en: "Our Team", id: "Tim Kami" })}
        </p>
        <h2 className="font-SourceSansProBold lg:text-3xl text-[28px] text-neutral-g mt-2">
          {t({ en: "Meet the Team", id: "Kenali Tim Kami" })}
        </h2>
      </div>

      {internal.length > 0 && renderGroup(t({ en: "Internal Team", id: "Tim Internal" }), internal)}
      {collaborator.length > 0 && renderGroup(t({ en: "Collaborator Team", id: "Tim Kolaborator" }), collaborator)}
    </section>
  );
}
