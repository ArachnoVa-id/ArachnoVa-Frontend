import { FiLinkedin, FiGlobe } from "react-icons/fi";

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
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "")
    .slice(0, 30);
}

export default function TeamSection({ members, projects }) {
  if (!members?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-20 py-16 lg:px-32 px-6">
      <div className="text-center mb-12">
        <p className="font-SourceSansProBold lg:text-xl text-base bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Team
        </p>
        <h2 className="font-SourceSansProBold lg:text-3xl text-2xl text-neutral-g mt-2">
          Meet the Founders
        </h2>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-8">
        {members.map((member, i) => {
          const memberProjects = (member.projectIds || [])
            .map((id) => (projects || []).find((p) => p.id === id))
            .filter(Boolean);
          return (
            <article key={i} className="flex flex-col gap-3 group w-72">
              <figure className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-purple-200">
                {member.image ? (
                  <img alt={member.name} src={member.image}
                    className="object-cover aspect-square w-full h-full transition-transform duration-500 group-hover:scale-110"
                    draggable="false"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                ) : null}
                <div className={`aspect-square w-full h-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center ${member.image ? "hidden" : ""}`}>
                  <span className="text-white lg:text-6xl text-4xl font-bold">{member.name?.charAt(0) || "?"}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              </figure>
              <div className="flex flex-col gap-1.5">
                <span className="text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600">{member.name}</span>
                <span className="text-sm text-gray-500">{member.role}</span>

                {/* LinkedIn */}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors truncate">
                    <FiLinkedin size={12} className="shrink-0" />
                    <span className="truncate">{shortUrl(member.linkedin)}</span>
                  </a>
                )}

                {/* Website */}
                {member.website && (
                  <a href={member.website} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-teal-600 transition-colors truncate">
                    <FiGlobe size={12} className="shrink-0" />
                    <span className="truncate">{shortUrl(member.website)}</span>
                  </a>
                )}

                {/* Project tags */}
                {memberProjects.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {memberProjects.map((p) => (
                      <a key={p.id} href={`/projects?projectId=${p.id}`}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200 hover:bg-LightBlue-c hover:text-white hover:border-LightBlue-c transition-colors">
                        {p.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex gap-6 overflow-x-auto pb-4">
        {members.map((member, i) => {
          const memberProjects = (member.projectIds || [])
            .map((id) => (projects || []).find((p) => p.id === id))
            .filter(Boolean);
          return (
            <div key={i} className="flex-shrink-0 w-64">
              <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50 shadow-sm mb-3">
                {member.image ? (
                  <img loading="lazy" alt={member.name} src={member.image} className="object-cover aspect-square w-full" draggable="false" />
                ) : (
                  <div className={`aspect-square w-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center`}>
                    <span className="text-white text-5xl font-bold">{member.name?.charAt(0) || "?"}</span>
                  </div>
                )}
              </div>
              <p className="font-bold text-base text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 mt-1">
                  <FiLinkedin size={12} /> <span className="truncate">{shortUrl(member.linkedin)}</span>
                </a>
              )}
              {member.website && (
                <a href={member.website} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-teal-600 mt-0.5">
                  <FiGlobe size={12} /> <span className="truncate">{shortUrl(member.website)}</span>
                </a>
              )}
              {memberProjects.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {memberProjects.map((p) => (
                    <a key={p.id} href={`/projects?projectId=${p.id}`}
                      className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200 hover:bg-LightBlue-c hover:text-white hover:border-LightBlue-c transition-colors">{p.title}</a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
