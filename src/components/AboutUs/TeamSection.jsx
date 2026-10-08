import { useState } from "react";
import { FiLinkedin, FiGlobe } from "react-icons/fi";
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

function shortUrl(url) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function initials(name) {
  const parts = (name || "?").trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

// Photo when one is set and loads; otherwise an initials avatar (never a page-sized tile).
function Avatar({ member, i }) {
  const [broken, setBroken] = useState(false);
  if (member.image && !broken) {
    return (
      <img alt={member.name} src={member.image} loading="lazy" draggable="false" onError={() => setBroken(true)}
        className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover border border-gray-200 shadow-sm" />
    );
  }
  return (
    <div aria-hidden="true"
      className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center shadow-sm`}>
      <span className="text-white text-2xl lg:text-3xl font-bold">{initials(member.name)}</span>
    </div>
  );
}

function ProfileLink({ href, icon: Icon, label, hoverClass }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className={`flex items-center justify-center gap-1.5 min-h-[44px] max-w-full text-[13px] text-gray-500 ${hoverClass} transition-colors`}>
      <Icon size={14} className="shrink-0" aria-hidden="true" />
      <span className="truncate">{shortUrl(href)}</span>
    </a>
  );
}

function MemberCard({ member, i, projects }) {
  const memberProjects = (member.projectIds || [])
    .map((id) => (projects || []).find((p) => p.id === id))
    .filter(Boolean);
  return (
    <article className="flex flex-col items-center text-center gap-1 min-w-0 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Avatar member={member} i={i} />
      <h4 className="mt-3 text-[15px] lg:text-base font-bold text-gray-900 leading-snug">{member.name}</h4>
      <p className="text-[13px] lg:text-sm text-gray-500">{member.role}</p>
      {(member.linkedin || member.website) && (
        <div className="flex flex-col items-center w-full min-w-0">
          {member.linkedin && <ProfileLink href={member.linkedin} icon={FiLinkedin} label={`${member.name} on LinkedIn`} hoverClass="hover:text-blue-600" />}
          {member.website && <ProfileLink href={member.website} icon={FiGlobe} label={`${member.name}'s website`} hoverClass="hover:text-teal-600" />}
        </div>
      )}
      {memberProjects.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1 mt-1">
          {memberProjects.map((p) => (
            <Link key={p.id} to={`/projects?projectId=${p.id}`}
              className="text-[12px] px-2 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200 hover:bg-LightBlue-c hover:text-white hover:border-LightBlue-c transition-colors">
              {p.title}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

export default function TeamSection({ members, projects }) {
  if (!members?.length) return null;

  const internal = members.filter((m) => m.type === "internal");
  const collaborator = members.filter((m) => m.type === "collaborator");
  const both = internal.length > 0 && collaborator.length > 0;

  const renderGroup = (title, items) => (
    <div className="mb-14 last:mb-0">
      {both && (
        <h3 className="text-center font-SourceSansProBold lg:text-2xl text-xl text-neutral-g mb-8">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-[64rem] mx-auto">
        {items.map((member, i) => (
          <MemberCard key={i} member={member} i={i} projects={projects} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white-MainPage lg:py-20 py-16 lg:px-32 px-4">
      <div className="text-center mb-12">
        <p className="font-SourceSansProBold lg:text-xl text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Team
        </p>
        <h2 className="font-SourceSansProBold lg:text-3xl text-[28px] text-neutral-g mt-2">
          Meet the Team
        </h2>
      </div>

      {internal.length > 0 && renderGroup("Internal Team", internal)}
      {collaborator.length > 0 && renderGroup("Collaborator Team", collaborator)}
    </section>
  );
}
