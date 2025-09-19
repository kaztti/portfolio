"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const fullTextLine1 = "Welcome to My Space!";
  const fullTextLine2 = "I am Egineer × Runner";

  useEffect(() => {
    let index = 0;
    const interval1 = setInterval(() => {
      setTypedLine1(fullTextLine1.slice(0, index));
      index++;
      if (index > fullTextLine1.length) clearInterval(interval1);
    }, 100);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    let index = 0;
    const delay = 100 * (fullTextLine1.length + 5);
    const timeout = setTimeout(() => {
      const interval2 = setInterval(() => {
        setTypedLine2(fullTextLine2.slice(0, index));
        index++;
        if (index > fullTextLine2.length) clearInterval(interval2);
      }, 100);
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  const sections = [
    { title: "PROFILE", desc: "プロフィールはこちら。", href: "/introduction", icon: FaUser, color: "#df99f5" },
    { title: "ACHIEVEMENTS", desc: "私の実績はこちら。", href: "/achievement", icon: FaProjectDiagram, color: "#fd92b8" },
    { title: "CONTACT", desc: "問い合わせやSNSはこちら。", href: "/contact", icon: FaEnvelope, color: "#f7ae5c" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#df99f5] via-[#fd92b8] to-[#f7ae5c] text-white overflow-hidden flex flex-col items-center px-4 py-20">
      {/* 雲のパーティクル */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0b0b0b" },
          fpsLimit: 60,
          particles: {
            number: { value: 12, density: { enable: true, area: 800 } },
            shape: { type: "image", image: { src: "/516f972fe72d247dfd174a53482488f1.png", width: 128, height: 128 } },
            opacity: { value: 0.12, random: true },
            size: { value: { min: 100, max: 180 }, random: true },
            move: { enable: true, speed: 0.15, direction: "none", random: true, outModes: { default: "out" } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* アイコン */}
      <main className="z-10 flex flex-col sm:flex-row items-center gap-6 text-left mb-14">
        <Image
          src="/KAZUTTI.png"
          alt="Kazutti Icon"
          width={120}
          height={120}
          className="rounded-full shadow-lg w-24 sm:w-40 h-auto"
        />
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Kazutti
          </h1>
          <p className="mt-2 bg-white/10 text-neutral-200 text-base sm:text-xl rounded-xl p-4 max-w-md border border-white/20 shadow-md backdrop-blur-sm leading-relaxed">
            {typedLine1}
            <br />
            {typedLine2}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </main>

      {/* カードセクション */}
      <section className="z-10 mt-4 w-full max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-pink-400 drop-shadow">About Me</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link href={section.href} key={index}>
                <div
                  className="bg-white/5 rounded-xl p-6 flex flex-col items-center shadow border border-white/10 text-center transition duration-200 hover:brightness-125"
                  style={{ boxShadow: `0 0 16px ${section.color}66` }}
                >
                  <Icon className="text-4xl mb-3" style={{ color: section.color }} />
                  <h3 className="text-lg font-semibold text-white tracking-wide">{section.title}</h3>
                  <div className="w-12 h-0.5 mt-1 mb-2 rounded-full" style={{ backgroundColor: section.color }} />
                  <p className="text-neutral-200 text-sm">{section.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* フッター */}
      <footer className="absolute bottom-4 text-sm text-gray-400 w-full text-center z-10">
        © 2025 Kazutti. All rights reserved.
      </footer>
    </div>
  );
}
