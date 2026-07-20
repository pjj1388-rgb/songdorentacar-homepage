"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* 배경 이미지 */}
    <Image
  src="/hero.jpg"
  alt="벤츠 S400d"
  fill
  priority
  className="object-cover"
/>
      

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 내용 */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <p className="text-yellow-400 tracking-[8px] text-sm mb-4 font-semibold">
              PREMIUM RENTAL SERVICE
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              한솔네트웍스
              <br />
              송도지점
            </h1>

            <p className="text-gray-200 mt-8 text-lg leading-8">
              송도 단기렌트 · 사고대차 전문
              <br />
              신차급 차량 보유 · 24시간 상담
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <a
                href="#vehicle"
                className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
              >
                보유차량 보기
              </a>

              <a
                href="tel:01022213110"
                className="px-8 py-4 rounded-xl border border-white text-white hover:bg-white hover:text-black transition"
              >
                010-2221-3110
              </a>

            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}