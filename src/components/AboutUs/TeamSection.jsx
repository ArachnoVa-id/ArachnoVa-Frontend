const gradientColors = [
  "from-purple-400 to-pink-400",
  "from-blue-400 to-teal-400",
  "from-orange-400 to-red-400",
  "from-green-400 to-cyan-400",
  "from-yellow-400 to-orange-400",
  "from-pink-400 to-rose-400",
  "from-indigo-400 to-purple-400",
  "from-[#1AB0C8]-400 to-green-400",
  "from-red-400 to-yellow-400",
  "from-cyan-400 to-blue-400",
  "from-rose-400 to-pink-400",
  "from-emerald-400 to-teal-400",
  "from-violet-400 to-purple-400",
  "from-amber-400 to-orange-400",
  "from-lime-400 to-emerald-400",
];

export default function TeamSection({ members }) {
  if (!members?.length) return null;

  return (
    <section className="w-full bg-white-MainPage lg:py-[2.9rem] py-[7.8rem] lg:px-[5.6rem] px-[3.1rem]">
      <div className="text-center mb-[1.69rem]">
        <p className="font-SourceSansProBold lg:text-[0.88rem] text-[2.4rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Team
        </p>
        <h2 className="font-SourceSansProBold lg:text-[1.35rem] text-[3.9rem] text-neutral-g lg:leading-[1.58rem] leading-[4.2rem] mt-[0.28rem]">
          Meet the Founders
        </h2>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {members.map((member, i) => (
          <article key={i} className="flex flex-col gap-4 group">
            <figure className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-purple-200">
              {member.image ? (
                <img
                  alt={member.name}
                  src={member.image}
                  className="object-cover aspect-square w-full h-full transition-transform duration-500 group-hover:scale-110"
                  draggable="false"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
              ) : null}
              <div className={`aspect-square w-full h-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center ${member.image ? "hidden" : ""}`}>
                <span className="text-white lg:text-[2.2rem] text-[8.4rem] font-bold">
                  {member.name?.charAt(0) || "?"}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </figure>
            <div className="flex flex-col gap-0.5">
              <span className="lg:text-lg text-[2.2rem] font-bold text-gray-900 transition-colors group-hover:text-purple-600">
                {member.name}
              </span>
              <span className="lg:text-sm text-[1.69rem] text-gray-500">{member.role}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-[2.2rem] overflow-x-auto pb-[1.12rem]">
        {members.map((member, i) => (
          <div key={i} className="flex-shrink-0 w-[33.8rem]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50 shadow-sm mb-[1.12rem]">
              {member.image ? (
                <img loading="lazy" alt={member.name} src={member.image} className="object-cover aspect-square w-full" draggable="false" />
              ) : (
                <div className={`aspect-square w-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center`}>
                  <span className="text-white text-[8.4rem] font-bold">{member.name?.charAt(0) || "?"}</span>
                </div>
              )}
            </div>
            <p className="font-bold text-[2.2rem] text-gray-900">{member.name}</p>
            <p className="text-[1.97rem] text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
