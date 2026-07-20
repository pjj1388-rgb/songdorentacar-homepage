"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-3xl font-black tracking-wide text-white">
          한솔네트웍스
          <span className="text-yellow-400"> 송도지점</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

          <a href="#" className="hover:text-yellow-400 transition">
            HOME
          </a>

          <a href="#vehicle" className="hover:text-yellow-400 transition">
            보유차량
          </a>

          <a href="#process" className="hover:text-yellow-400 transition">
            사고대차
          </a>

          <a href="#review" className="hover:text-yellow-400 transition">
            고객후기
          </a>

          <a
            href="https://map.naver.com/p/entry/place/1559855268"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            📍 플레이스
          </a>

          <a
            href="https://m.blog.naver.com/songdorentacar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            📝 블로그
          </a>

        </nav>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="tel:01022213110"
            className="rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            📞 전화상담
          </a>

          <a
            href="tel:01022213110"
            className="rounded-full bg-yellow-400 px-6 py-2 font-bold text-black hover:scale-105 transition"
          >
            010-2221-3110
          </a>

        </div>

      </div>
    </header>
  );
}