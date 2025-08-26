"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [showBg, setShowBg] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setShowBg(true);

      const timeout = setTimeout(() => {
        setShowBg(false);
        setPrevPath(pathname);
      }, 500); 

      return () => clearTimeout(timeout);
    }
  }, [pathname, prevPath]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ページ遷移中だけ */}
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

      {/* アニメーション */}
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative z-10">
          {/* 背景レイヤー*/}
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

            <div className="w-full h-full bg-[url('/ekiden.jpg')] bg-cover bg-center opacity-20"></div>
          </motion.div>

          {/* レイヤー */}
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
