import { Phone, BookOpen, ShieldCheck } from "lucide-react";

export default function EmergencySection() {
  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Gold Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="rounded-[36px] border border-yellow-400/20 bg-gradient-to-r from-[#151515] to-[#1d1d1d] p-12 shadow-2xl">

          <div className="text-center">

            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black">
              <ShieldCheck size={40} />
            </div>

            <h2 className="mt-8 text-5xl font-black text-white">
              사고가 발생하셨나요?
            </h2>

            <p className="mt-6 text-xl text-gray-300">
              사고대차 · 단기렌트 전문
            </p>

            <p className="mt-2 text-gray-400">
              보험사 사고접수부터 차량 배차까지
              <br />
              한솔네트웍스 송도지점이 빠르게 도와드립니다.
            </p>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:01022213110"
              className="flex items-center gap-2 rounded-full bg-yellow-400 px-9 py-4 font-bold text-black transition hover:scale-105"
            >
              <Phone size={20} />
              010-2221-3110
            </a>

            <a
              href="https://blog.naver.com/songdorentacar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-yellow-400 px-9 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              <BookOpen size={20} />
              네이버 블로그
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}