export default function EmergencySection() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="text-6xl">🚗</div>

        <h2 className="mt-6 text-5xl font-black text-black">
          사고가 발생하셨나요?
        </h2>

        <p className="mt-6 text-2xl text-black font-semibold">
          24시간 긴급 배차 · 사고대차 전문
        </p>

        <p className="mt-2 text-black/80">
          보험사 사고대차부터 단기렌트까지 빠르게 안내해드립니다.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="tel:01022213110"
            className="rounded-full bg-black px-10 py-5 text-xl font-bold text-white hover:scale-105 transition"
          >
            📞 010-2221-3110
          </a>

          <a
            href="https://blog.naver.com/songdorentacar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-black px-10 py-5 text-xl font-bold text-black hover:bg-black hover:text-white transition"
          >
            📝 네이버 블로그
          </a>

        </div>

      </div>
    </section>
  );
}