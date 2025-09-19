"use client";

import { FaCode, FaServer, FaRunning, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Introduction() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#121212] to-[#0b0b0b] text-white px-4 py-12 sm:py-16 flex flex-col items-center relative overflow-hidden">
      {/*背景パーティクル*/}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: false, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 120,
              opacity: 0.1,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "right",
              straight: true,
              outModes: { default: "out" },
            },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      {/*駅伝ロゴ*/}
      <div className="absolute bottom-12 right-6 sm:right-24 z-0 opacity-30">
        <Image
          src="/1770477.png"
          alt="Ekiden Logo"
          width={420}
          height={420}
          style={{ filter: "brightness(100%) invert(1)" }}
        />
      </div>

      {/*プログラミングエフェクト*/}
      <div className="absolute inset-0 z-0 opacity-5 select-none pointer-events-none font-mono text-xs text-green-300 whitespace-pre-line leading-relaxed px-4 sm:px-8">{`const runner = "Kazutti";\nlet passion = ["Architecture", "Minecraft", "WebDev", "Running"];\n\nfunction grow(skills) {\n  return skills.map(skill => skill + "++");\n}\n\nfunction batonPass(teammate) {\n  console.log("Passing the baton to " + teammate);\n}\n\nconsole.log("Keep running and coding!");`}</div>

      {/*タイトル*/}
      <h1 className="relative z-10 text-3xl sm:text-5xl font-bold text-pink-400 mb-4 drop-shadow-lg">
        Profile
      </h1>
      <div className="relative z-10 w-16 h-1 bg-pink-400 rounded-full mb-6"></div>

      {/*自己PR*/}
      <div className="relative z-10 text-sm sm:text-base text-center text-neutral-300 max-w-4xl mb-14 leading-loose space-y-6 px-4">
        <p>
          ２年目の建築大学生。将来、建築の仕事に就くために奮闘中！趣味として、マイクラのサーバー運営、プログラミング、ランニングをしている。好きなYoutuberはKUNさん！参加勢になるためにコマンド系の技術を勉強中。
        </p>
      </div>

      {/*経験*/}
      <h2 className="relative z-10 text-2xl sm:text-4xl font-extrabold text-yellow-300 mb-10 drop-shadow-xl tracking-wide">
        💡Experience
      </h2>
      <div className="relative z-10 w-20 h-1 bg-yellow-300 rounded-full mb-12"></div>

      {/*経験各種セクション*/}
      <div className="relative z-10 flex flex-col gap-10 max-w-5xl w-full px-6 text-sm text-neutral-200">
        {[
          {
            title: "Web Development",
            color: "bg-[#df99f5]",
            text: "HTML / CSS / JavaScript / React / Next.js(Node.js) などを使って、Webサイトを開発している。実際にポートフォリオを作りながら勉強中！",
          },
          {
            title: "Minecraft Development",
            color: "bg-[#c58af7]",
            text: "Java / SQLite を使って Minecraft のプラグインを開発している。サーバー運営で必要な機能を自作し、実際に『らーす鯖』で導入した！メニューGUIやコンバットタグ(PvPシステム)、強化MOB、手持ち経験値のボトル変換など！！",
          },
          {
            title: "Server Management",
            color: "bg-[#fd92b8]",
            text: "２０２２年１２月４日にプロジェクト始動したMinecraft サーバー『らーす鯖』を運営している。開発チームのマネージャー兼モデレーターとして、サーバーの運営全般、特にコミュニティの秩序維持、プレイヤーサポート(お問い合わせ対応)、イベント企画・進行、プラグイン開発を行っている！(たまに開発メンバーのモチベーション管理も)",
          },
          {
            title: "Architecture / CAD",
            color: "bg-[#4CAF50]",
            text: "大学で Vectorworks や Archicad を用いて、建築設計・図面作成・3Dモデリングを行った経験がある。大学の授業では、プランのゾーニング、ラフスケッチ、各種意匠図の書き方、模型(スタディ模型)の作り方を学んでいる！今はカフェの設計課題に取組中！！",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white/5 border-t-2 border-white/10 rounded-md p-6 shadow-inner"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1 h-6 rounded ${section.color}`}></div>
              <h2 className="text-lg font-semibold text-white tracking-wide">
                {section.title}
              </h2>
            </div>
            <p>{section.text}</p>
          </div>
        ))}
      </div>

      {/*フッター*/}
      <footer className="absolute bottom-4 text-sm text-gray-400 w-full text-center z-10">
        © 2025 Kazutti. All rights reserved.
      </footer>
    </div>
  );
}
