"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [showBg, setShowBg] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  // ページ遷移を検出して背景表示
  useEffect(() => {
    if (pathname !== prevPath) {
      setShowBg(true);

      const timeout = setTimeout(() => {
        setShowBg(false);
        setPrevPath(pathname);
      }, 500); // 背景表示の時間（ミリ秒）

      return () => clearTimeout(timeout);
    }
  }, [pathname, prevPath]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ✅ ページ遷移中だけ駅伝背景を表示 */}
      <AnimatePresence>
        {showBg && (
          <motion.div
            key="ekiden-bg"
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/ekiden.jpg')",
              filter: "brightness(0.5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      {/* ✅ ページ全体を包むアニメーション */}
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative z-10">
          {/* 背景レイヤー（ブラー付き・低透明度） */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{
              x: 120,
              y: -60,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: -100,
              y: 40,
              opacity: 0,
              scale: 0.97,
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(6px)",
              zIndex: 0,
            }}
          >
            {/* 背景画像を固定表示（薄く） */}
            <div className="w-full h-full bg-[url('/ekiden.jpg')] bg-cover bg-center opacity-20"></div>
          </motion.div>

          {/* 前景レイヤー（メインコンテンツ） */}
          <motion.div
            className="relative z-10"
            initial={{
              x: 120,
              y: -60,
              opacity: 0,
              scale: 0.95,
              rotate: -3,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              x: -100,
              y: 40,
              opacity: 0,
              scale: 0.97,
              rotate: 2,
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
