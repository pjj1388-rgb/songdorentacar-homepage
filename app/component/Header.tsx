"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="leading-none">
          <p className="text-3xl font-black text-white">
            한솔네트웍스
          </p>

          <p className="mt-1 text-xl font-bold text-yellow-400 tracking-wide">
            송도지점
          </p>
        </a>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-9 text-sm font-semibold text-white">

          <a href="#" className="transition hover:text-yellow-400">
            HOME
          </a>

          <a href="#service" className="transition hover:text-yellow-400">
            서비스
          </a>

          <a href="#vehicle" className="transition hover:text-yellow-400">
            보유차량
          </a>

          <a href="#accident" className="transition hover:text-yellow-400">
            사고대차
          </a>

          <a href="#contact" className="transition hover:text-yellow-400">
            상담문의
          </a>

          <a
            href="https://map.naver.com/p/entry/place/1559855268"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-yellow-400"
          >
            플레이스
          </a>

          <a
            href="https://m.blog.naver.com/songdorentacar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-yellow-400"
          >
            블로그
          </a>

        </nav>

        {/* Call */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="tel:01022213110"
            className="flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            <Phone size={18} />
            전화상담
          </a>

          <a
            href="tel:01022213110"
            className="rounded-full bg-yellow-400 px-6 py-2 font-bold text-black transition hover:scale-105"
          >
            010-2221-3110
          </a>

        </div>

      </div>
    </header>
  );
}