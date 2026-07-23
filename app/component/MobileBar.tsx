"use client";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-500/20 bg-black/95 backdrop-blur-xl shadow-2xl lg:hidden">

      <div className="grid grid-cols-3">

        {/* 전화상담 */}
        <a
          href="tel:01022213110"
          className="flex flex-col items-center justify-center py-4 text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
        >
          <span className="text-2xl">📞</span>
          <span className="mt-2 text-xs font-bold">
            전화상담
          </span>
        </a>

        {/* 카카오톡 */}
        <a
          href="https://pf.kakao.com/_dnxexfn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-4 text-white transition-all duration-300 hover:bg-[#FEE500] hover:text-black"
        >
          <span className="text-2xl">💬</span>
          <span className="mt-2 text-xs font-bold">
            카카오톡
          </span>
        </a>

        {/* 네이버 플레이스 */}
        <a
          href="https://map.naver.com/p/entry/place/1559855268"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-4 text-white transition-all duration-300 hover:bg-green-500 hover:text-white"
        >
          <span className="text-2xl">📍</span>
          <span className="mt-2 text-xs font-bold">
            플레이스
          </span>
        </a>

      </div>

    </div>
  );
}