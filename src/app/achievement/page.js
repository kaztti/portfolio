import Link from "next/link";

export default function AchievementPage() {
  const highlights = [
    { label: "開発経験", value: "1年+", caption: "Java / JS / SQLite" },
    { label: "運用歴", value: "2年+", caption: "らーす鯖 運営" },
    { label: "制作実績", value: "3+", caption: "Web / MenuPlugin / RearthCore / RearthServer" },
  ];

  const timeline = [
    {
      date: "2025",
      title: "プラグインの開発",
      desc:
        "Towny連携の戦争システム(開発中)",
      chips: ["Minecraft Plugin", "Towny", "戦争"],
    },
    {
      date: "2025",
      title: "Web ポートフォリオ構築",
      desc:
        "Next.jsを使用したポートフォリオを作成。",
      chips: ["Next.js", "Vercel"],
    },
    {
      date: "2023",
      title: "サーバー運営",
      desc:
        "鬼宿というコミュニティを中心に新たにearth系のサーバーを設立。",
      chips: ["Community", "らーす鯖", "Earth"],
    },
  ];

  const projects = [
    {
      title: "RearthWar (開発中)",
      body:
        "RearthServerで運用予定の国家間戦争システム。Earthサーバーで欠かせないゲーム性・経済・外交にまで結びつけたサーバー独自の大規模戦争システム。",
      meta: "Java・Paper 1.21 / Towny・Vault 連携",
    },
    {
      title: "らーす鯖",
      body:
        "地球をコンセプトにしたearth系クロスプレイマルチサーバー。今年で3年目。これまでに約10000人が訪れたサーバー。",
      meta: "らーす鯖 / コミュニティ / 🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-[#111] to-[#161616] text-white px-4 py-12 sm:py-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent">Career & Achievements</span>
        </h1>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Kazuttiのキャリア記録
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center shadow-inner">
              <div className="text-3xl font-extrabold text-white">{h.value}</div>
              <div className="mt-1 text-sm text-neutral-300">{h.label}</div>
              <div className="mt-1 text-xs text-neutral-400">{h.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <div className="mt-6 relative">
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-8">
            {timeline.map((t, idx) => (
              <div key={idx} className="grid sm:grid-cols-2 gap-6 items-start">
                {/* Left (date) */}
                <div className={`sm:text-right ${idx % 2 === 1 ? "sm:order-2" : ""}`}>
                  <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm text-neutral-200">
                    {t.date}
                  </div>
                </div>
                {/* Right (content) */}
                <div className={`bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner ${idx % 2 === 1 ? "sm:order-1" : ""}`}>
                  <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-neutral-300 leading-relaxed">{t.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.chips.map((c) => (
                      <span key={c} className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 text-neutral-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto mt-14">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-inner">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed">{p.body}</p>
              <div className="mt-3 text-xs text-neutral-400">{p.meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400 text-center">© 2025 Kazutti. All rights reserved.</footer>
    </div>
  );
}
