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
          ? "bg-black/85 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

        <a href="/" className="text-3xl font-black text-white">
          한솔네트웍스
          <span className="text-yellow-400"> 송도지점</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

          <a href="#">HOME</a>

          <a href="#vehicle">보유차량</a>

          <a href="#review">후기</a>

          <a href="#contact">문의</a>

        </nav>

        <a
          href="tel:01022213110"
          className="rounded-full bg-yellow-400 px-6 py-3 text-black font-bold hover:scale-105 transition"
        >
          📞 010-2221-3110
        </a>

      </div>
    </header>
  );
}