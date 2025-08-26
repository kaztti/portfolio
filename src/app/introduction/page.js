"use client";

import { FaCode, FaServer, FaRunning, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
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

      {/*紹介文*/}
      <div className="relative z-10 text-sm sm:text-base text-center text-neutral-300 max-w-4xl mb-14 leading-loose space-y-6 px-4">
        <p>
          こんにちは、<strong>Kazutti</strong> です。
          <br />
          大学では建築を学びながら、趣味で Minecraft サーバーを運営したり、
          <br />
          プラグインを作ったりしています。普段は走ることも好きで、気分転換にジョギングをしてリフレッシュしています。
        </p>
        <p>
          音楽は <strong>BLOOM VASE</strong> をよく聴きます。
          <br />
          特にお気に入りは 平井大 さんの <strong>A Song for You</strong> です。
        </p>
      </div>

      {/*セクションブロック*/}
      <div className="relative z-10 flex flex-col gap-10 max-w-5xl w-full px-6 text-sm text-neutral-200">
        {[
          {
            title: "Development",
            color: "bg-[#df99f5]",
            text: "Java / JavaScript / SQLite / ChatGPT を使って、Webサイトや Minecraft のプラグインを開発しています。プログラミングを始めてからは約1年。まだ学ぶことは多いですが、運営しているサーバーで実際に作成したプラグインを使用しています。",
          },
          {
            title: "Server Management",
            color: "bg-[#fd92b8]",
            text: "Minecraft サーバー『らーす鯖』を運営しています。プレイヤーのサポートやサーバーメンテナンス、コンテンツ追加などを行っていて、今年で3年目になります。",
          },
          {
            title: "Running",
            color: "bg-[#f7ae5c]",
            text: "小学生の頃から走ることが好きで、今はほぼ毎日ジョギングを続けています。サーバー運営で疲れたときも、走ることで頭をリフレッシュしています。",
          },
          {
            title: "Teamwork",
            color: "bg-[#f1f179]",
            text: "一人で作業するのも得意ですが、必要な場面では仲間と協力することを大事にしています。自分から積極的に声をかけるタイプではありませんが、気軽に声をかけてもらえるとうれしいです。",
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
