import { useCollection } from "@/context/DataContext";

export default function HeroAdmin() {
  const [hero, setHero] = useCollection("hero");

  const update = (field, value) => setHero({ ...hero, [field]: value });

  const updateWord = (index, value) => {
    const words = [...(hero.animatedWords || [])];
    words[index] = value;
    update("animatedWords", words);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <input value={hero.brand || ""} onChange={(e) => update("brand", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
            <input value={hero.tagline || ""} onChange={(e) => update("tagline", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input value={hero.subtitle || ""} onChange={(e) => update("subtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Animated Words</label>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <input key={i} value={hero.animatedWords?.[i] || ""} onChange={(e) => updateWord(i, e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder={`Word ${i + 1}`} />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Primary Text</label>
            <input value={hero.ctaPrimary?.text || ""} onChange={(e) => update("ctaPrimary", { ...hero.ctaPrimary, text: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Primary Link</label>
            <input value={hero.ctaPrimary?.href || ""} onChange={(e) => update("ctaPrimary", { ...hero.ctaPrimary, href: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Secondary Text</label>
            <input value={hero.ctaSecondary?.text || ""} onChange={(e) => update("ctaSecondary", { ...hero.ctaSecondary, text: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Secondary Link</label>
            <input value={hero.ctaSecondary?.href || ""} onChange={(e) => update("ctaSecondary", { ...hero.ctaSecondary, href: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Desktop BG Image</label>
            <input value={hero.backgroundDesktop || ""} onChange={(e) => update("backgroundDesktop", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile BG Image</label>
            <input value={hero.backgroundMobile || ""} onChange={(e) => update("backgroundMobile", e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono" />
          </div>
        </div>
      </div>
    </div>
  );
}
