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
    <section className="w-full bg-white-MainPage lg:py-[clamp(0.83rem,5.208vw,7.5rem)] py-[clamp(2.23rem,13.953vw,20.09rem)] lg:px-[clamp(1.6rem,10.0vw,14.4rem)] px-[clamp(0.89rem,5.581vw,8.04rem)]">
      <div className="text-center mb-[clamp(0.48rem,3.0vw,4.32rem)]">
        <p className="font-SourceSansProBold lg:text-[clamp(0.5rem,1.563vw,2.25rem)] text-[clamp(0.67rem,4.186vw,6.03rem)] bg-clip-text text-transparent bg-gradient-to-r from-[#1AB0C8] via-[#84D4E1] to-[#179FB5]">
          Our Team
        </p>
        <h2 className="font-SourceSansProBold lg:text-[clamp(0.5rem,2.396vw,3.45rem)] text-[clamp(1.12rem,6.977vw,8rem)] text-neutral-g lg:leading-[clamp(0.45rem,2.8vw,4.03rem)] leading-[clamp(1.2rem,7.5vw,10.8rem)] mt-[clamp(0.2rem,0.5vw,0.72rem)]">
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
                <span className="text-white lg:text-[clamp(0.64rem,4.0vw,5.76rem)] text-[clamp(2.4rem,15.0vw,8rem)] font-bold">
                  {member.name?.charAt(0) || "?"}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </figure>
            <div className="flex flex-col gap-0.5">
              <span className="lg:text-lg text-[clamp(0.64rem,4.0vw,5.76rem)] font-bold text-gray-900 transition-colors group-hover:text-purple-600">
                {member.name}
              </span>
              <span className="lg:text-sm text-[clamp(0.5rem,3.0vw,4.32rem)] text-gray-500">{member.role}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-[clamp(0.64rem,4.0vw,5.76rem)] overflow-x-auto pb-[clamp(0.32rem,2.0vw,2.88rem)]">
        {members.map((member, i) => (
          <div key={i} className="flex-shrink-0 w-[clamp(9.6rem,60.0vw,50rem)]">
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50 shadow-sm mb-[clamp(0.32rem,2.0vw,2.88rem)]">
              {member.image ? (
                <img loading="lazy" alt={member.name} src={member.image} className="object-cover aspect-square w-full" draggable="false" />
              ) : (
                <div className={`aspect-square w-full bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center`}>
                  <span className="text-white text-[clamp(2.4rem,15.0vw,8rem)] font-bold">{member.name?.charAt(0) || "?"}</span>
                </div>
              )}
            </div>
            <p className="font-bold text-[clamp(0.64rem,4.0vw,5.76rem)] text-gray-900">{member.name}</p>
            <p className="text-[clamp(0.56rem,3.5vw,5.04rem)] text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
