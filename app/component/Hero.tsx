"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CarFront, ChevronDown, ShieldCheck, Clock3, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden z-0">

      {/* Background */}
<Image
  src="/cars/grandeur.jpg"
  alt="디 올 뉴 그랜저"
  fill
  priority
  className="object-cover object-center scale-105"
/>

{/* Overlay */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />



  

      {/* Gold Blur */}
     <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />
     <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-3xl"
          >

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0px" }}
              animate={{ opacity: 1, letterSpacing: "6px" }}
              transition={{ delay: .2 }}
              className="text-yellow-400 text-sm font-bold uppercase"
            >
              Premium Rental Service
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="mt-6 text-white font-black leading-tight text-5xl md:text-7xl"
            >
              한솔네트웍스
              <br />
              <span className="text-yellow-400">
                송도지점
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-8 text-lg leading-8 text-gray-200 md:text-xl"
            >
              사고대차와 단기렌트를
              <span className="font-bold text-white">
                {" "}하나의 프리미엄 서비스
              </span>
              로 제공합니다.
              <br />
              신차급 차량과 신속한 상담으로
              고객님의 이동이 멈추지 않도록 함께합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-10 flex flex-wrap gap-3"
            >

              <div className="flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-500/10 px-5 py-3 text-white">
                <ShieldCheck className="h-5 w-5 text-yellow-400" />
                사고대차 전문
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white">
                <CarFront className="h-5 w-5 text-yellow-400" />
                단기렌트
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white">
                <Clock3 className="h-5 w-5 text-yellow-400" />
                24시간 상담
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                100% 금연차량
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0,y:20 }}
              animate={{ opacity: 1,y:0 }}
              transition={{ delay: .9 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <a
                href="#vehicle"
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                차량 둘러보기
              </a>

              <a
                href="tel:01022213110"
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white hover:text-black transition"
              >
                <Phone className="h-5 w-5" />
                010-2221-3110
              </a>

            </motion.div>
                        <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-black text-yellow-400">24H</p>
                <p className="mt-2 text-sm text-gray-300">
                  연중무휴 상담
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-black text-yellow-400">100%</p>
                <p className="mt-2 text-sm text-gray-300">
                  금연 차량 운영
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-black text-yellow-400">Premium</p>
                <p className="mt-2 text-sm text-gray-300">
                  신차급 차량 관리
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-black text-yellow-400">365</p>
                <p className="mt-2 text-sm text-gray-300">
                  사고대차 · 단기렌트
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#service"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="flex flex-col items-center text-white"
        >
          <span className="mb-2 text-xs tracking-[4px] uppercase text-gray-300">
            Scroll
          </span>

          <div className="flex h-12 w-8 items-start justify-center rounded-full border border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="h-2 w-2 rounded-full bg-yellow-400"
            />
          </div>

          <ChevronDown className="mt-2 h-5 w-5 text-yellow-400" />
        </motion.div>
      </motion.a>
    </section>
  );
}