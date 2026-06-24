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
    <section className="w-full bg-white-MainPage lg:py-[7.5rem] py-[20.09rem] lg:px-[14.4rem] px-[8.04rem]">
      <div className="text-center mb-[4.32rem]">
        <p className="font-SourceSansProBold lg:text-[2.25rem] text-[6.03rem] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Team
        </p>
        <h2 className="font-SourceSansProBold lg:text-[3.45rem] text-[8rem] text-neutral-g lg:leading-[4.03rem] leading-[10.8rem] mt-[0.72rem]">
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
                <span className="text-white lg:text-[5.76rem] text-[8rem] font-bold">
                  {member.name?.charAt(0) || "?"}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </figure>
            <div className="flex flex-col gap-0.5">
              <span className="lg:text-lg text-[5.76rem] font-bold text-gray-900 transition-colors group-hover:text-purple-600">
                {member.name}
              </span>
              <span className="lg:text-sm text-[4.32rem] text-gray-500">{member.role}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-[5.76rem] overflow-x-auto pb-[2.88rem]">
        {members.map((member, i) => (
          <div key={i} className="flex-shrink-0 w-[50rem]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50 shadow-sm mb-[2.88rem]">
              {member.image ? (
                <img loading="lazy" alt={member.name} src={member.image} className="object-cover aspect-square w-full" draggable="false" />
              ) : (
                <div className={`aspect-square w-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center`}>
                  <span className="text-white text-[8rem] font-bold">{member.name?.charAt(0) || "?"}</span>
                </div>
              )}
            </div>
            <p className="font-bold text-[5.76rem] text-gray-900">{member.name}</p>
            <p className="text-[5.04rem] text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
