export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur lg:hidden">

      <div className="grid grid-cols-3">

        <a
          href="tel:01022213110"
          className="flex flex-col items-center py-4 text-white transition hover:bg-yellow-500 hover:text-black"
        >
          <span className="text-2xl">📞</span>
          <span className="text-sm mt-1">전화문의</span>
        </a>

        <a
          href="https://blog.naver.com/songdorentacar"
          target="_blank"
          className="flex flex-col items-center py-4 text-white transition hover:bg-yellow-500 hover:text-black"
        >
          <span className="text-2xl">📝</span>
          <span className="text-sm mt-1">블로그</span>
        </a>

        <a
          href="https://map.naver.com/"
          target="_blank"
          className="flex flex-col items-center py-4 text-white transition hover:bg-yellow-500 hover:text-black"
        >
          <span className="text-2xl">📍</span>
          <span className="text-sm mt-1">오시는길</span>
        </a>

      </div>

    </div>
  );
}