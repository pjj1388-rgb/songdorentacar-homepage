export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-24">

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <p className="text-black font-bold tracking-[5px]">
          24H EMERGENCY
        </p>

        <h2 className="mt-6 text-5xl font-black text-black">
          사고가 발생하셨나요?
        </h2>

        <p className="mt-6 text-2xl font-semibold text-black">
          한솔네트웍스 송도지점이
          <br />
          24시간 신속하게 배차해드립니다.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="tel:01022213110"
            className="rounded-full bg-black px-10 py-5 text-xl font-bold text-white transition hover:scale-105"
          >
            📞 010-2221-3110
          </a>

          <a
            href="https://blog.naver.com/songdorentacar"
            target="_blank"
            className="rounded-full border-2 border-black px-10 py-5 text-xl font-bold text-black transition hover:bg-black hover:text-white"
          >
            📝 블로그 보기
          </a>

        </div>

      </div>

    </section>
  );
}