// components/LogoHeader.js
import Link from "next/link";

export default function LogoHeader() {
  return (
    <div className="absolute top-6 left-6 z-20">
      <Link
        href="/"
        className="px-5 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all hover:scale-105 hover:bg-white/10"
        aria-label="Kazutti Portfolio ホームへ戻る"
      >
        <span className="text-pink-400 font-pixel text-base sm:text-lg tracking-widest">
          Kazutti
        </span>{" "}
        <span className="text-white font-pixel text-base sm:text-lg tracking-widest">
          Portfolio
        </span>
      </Link>
    </div>
  );
}
