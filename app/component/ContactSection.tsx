export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black py-28 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-yellow-400 tracking-[6px] text-sm font-semibold">
          CONTACT
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          사고가 발생하셨나요?
        </h2>

        <p className="mt-6 text-xl text-gray-200">
          사고대차 · 단기렌트 전문
        </p>

        <p className="mt-2 text-gray-400">
          24시간 · 연중무휴 상담 가능
        </p>

        <div className="mt-12">
          <a
            href="tel:01022213110"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-10 py-5 text-2xl font-bold text-black transition hover:bg-yellow-300"
          >
            📞 010-2221-3110
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="https://map.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#03C75A] px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            📍 네이버 플레이스
          </a>

          <a
            href="https://blog.naver.com/songdorentacar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#03C75A] px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            📝 네이버 블로그
          </a>
        </div>
      </div>
    </section>
  );
}