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
      {/* 粒子背景 */}
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
            links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.1, width: 0.5 },
            move: { enable: true, speed: 0.6, direction: "right", straight: true, outModes: { default: "out" } },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      {/* 駅伝ロゴ */}
      <div className="absolute bottom-12 right-6 sm:right-24 z-0 opacity-30">
        <Image src="/1770477.png" alt="Ekiden Logo" width={420} height={420} style={{ filter: 'brightness(100%) invert(1)' }} />
      </div>

      {/* 背景コード */}
      <div className="absolute inset-0 z-0 opacity-5 select-none pointer-events-none font-mono text-xs text-green-300 whitespace-pre-line leading-relaxed px-4 sm:px-8">
        {`const runner = "Kazutti";
let passion = ["Architecture", "Minecraft", "WebDev", "Running"];
function grow(skills) {
  return skills.map(skill => skill + "++");
}
function batonPass(teammate) {
  console.log("Passing the baton to " + teammate);
}
console.log("Keep running and coding!");`}
      </div>

      {/* タイトル */}
      <h1 className="relative z-10 text-3xl sm:text-5xl font-bold text-pink-400 mb-4 drop-shadow-lg">
        Self Introduction
      </h1>
      <div className="relative z-10 w-16 h-1 bg-pink-400 rounded-full mb-6"></div>

      {/* 紹介文 */}
      <div className="relative z-10 text-sm sm:text-base text-center text-neutral-300 max-w-4xl mb-14 leading-loose space-y-6 px-4">
        <p>
          こんにちは、<strong>Kazutti</strong> です。<br />
          大学では建築を学びながら、趣味で Minecraft サーバーの運営や、<br />
          プログラミングをやっています。また、空いた時間にジョギングもしています。
        </p>
        <p>
          自身が運営している Minecraft サーバー <strong>らーす鯖</strong> では、<br />
          プレイヤーのサポートやプラグインの開発を通じて、<br />
          日々技術力を向上させています。
        </p>
        <p>
          最近は <strong>BLOOM VASE</strong> の音楽にハマっています。<br />
          だけど、好きな楽曲はsloppy dim さんの <strong>KIMAGURE</strong> です。
        </p>
      </div>

      {/* 陸上っぽいブロック分け */}
      <div className="relative z-10 flex flex-col gap-10 max-w-5xl w-full px-6 text-sm text-neutral-200">
        {[{
          title: "Development",
          color: "bg-[#df99f5]",
          text: "Java、JavaScript、SQLite などを使って、自身のウェブサイトや Minecraft のプラグインを作っています。プログラミング歴は１年ぐらいです。",
        }, {
          title: "Server Management",
          color: "bg-[#fd92b8]",
          text: "Minecraft サーバー「らーす鯖」を運営していて、サポートやメンテナンス、コンテンツ追加なども行っています。あんなこんなで今年で３年目になるらしい。",
        }, {
          title: "Running",
          color: "bg-[#f7ae5c]",
          text: "小学生の頃から続けていて、最近また走り始めました。毎日、家や競技場の周りをジョギングしていて、サーバー運営のストレスをリフレッシュしています。",
        }, {
          title: "Teamwork",
          color: "bg-[#f1f179]",
          text: "性格はINFJ型です。コミュニケーションは、自分が慣れた人としか出来ません。でも最近少しずつ鍛えてる。誰よりも気配りができる自信があります。",
        }].map((section, index) => (
          <div key={index} className="bg-white/5 border-t-2 border-white/10 rounded-md p-6 shadow-inner">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1 h-6 rounded ${section.color}`}></div>
              <h2 className="text-lg font-semibold text-white tracking-wide">{section.title}</h2>
            </div>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}