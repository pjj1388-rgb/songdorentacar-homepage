"use client";

import {
  Phone,
  BookOpen,
  MapPinned,
} from "lucide-react";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-lg lg:hidden">

      <div className="grid grid-cols-3">

        <a
          href="tel:01022213110"
          className="flex flex-col items-center justify-center gap-1 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          <Phone size={22} />
          <span className="text-xs font-bold">
            전화상담
          </span>
        </a>

        <a
          href="https://blog.naver.com/songdorentacar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white transition hover:bg-white hover:text-black"
        >
          <BookOpen size={22} />
          <span className="text-xs font-bold">
            블로그
            <a
  href="https://www.daangn.com/kr/local-profile/so46fy4cm3qr/?referrer=share"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center justify-center gap-1 py-3 text-white transition hover:bg-white hover:text-black"
>
  🥕
  <span className="text-xs font-bold">
    당근
  </span>
</a>
          </span>
        </a>

        <a
          href="https://map.naver.com/p/entry/place/1559855268"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white transition hover:bg-white hover:text-black"
        >
          <MapPinned size={22} />
          <span className="text-xs font-bold">
            플레이스
          </span>
        </a>

      </div>

    </div>
  );
}