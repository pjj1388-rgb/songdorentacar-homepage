"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CarFront,
  ArrowRight,
  Clock3,
  MapPinned,
  Plane,
} from "lucide-react";

export default function ServiceSection() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    const headerHeight = 100;

    const targetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="service"
      className="relative overflow-hidden bg-[#0b0b0b] py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="tracking-[6px] font-semibold text-yellow-400">
            OUR SERVICE
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            어떤 서비스가 필요하신가요?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            사고대차와 단기렌트를 하나의 프리미엄 서비스로 제공합니다.
            <br />
            고객님의 상황에 맞는 서비스를 선택해보세요.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* 사고대차 */}

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-white/10 bg-[#151515] p-10 transition-all hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/10"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <ShieldCheck size={34} />
              </div>

              <div>
                <p className="font-semibold text-yellow-400">
                  ACCIDENT RENTAL
                </p>

                <h3 className="text-4xl font-black text-white">
                  사고대차
                </h3>
              </div>

            </div>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              갑작스러운 사고에도 고객님의 이동이 멈추지 않도록
              사고 접수부터 차량 배차까지 친절하게 안내해드립니다.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-white">
                <Clock3
                  className="text-yellow-400"
                  size={20}
                />
                24시간 상담
              </div>

              <div className="flex items-center gap-3 text-white">
                <MapPinned
                  className="text-yellow-400"
                  size={20}
                />
                송도 · 인천 전지역 배차
              </div>
                            <div className="flex items-center gap-3 text-white">
                <CarFront
                  className="text-yellow-400"
                  size={20}
                />
                다양한 사고대차 차량 보유
              </div>

            </div>

            <button
              type="button"
              onClick={() => scrollToSection("accident")}
              className="mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition duration-300 hover:scale-105 active:scale-95"
            >
              사고대차 안내
              <ArrowRight size={18} />
            </button>

          </motion.div>

          {/* 단기렌트 */}

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-white/10 bg-[#151515] p-10 transition-all hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/10"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Plane size={34} />
              </div>

              <div>

                <p className="font-semibold text-yellow-400">
                  SHORT RENT
                </p>

                <h3 className="text-4xl font-black text-white">
                  단기렌트
                </h3>

              </div>

            </div>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              여행, 출장, 차량 정비 기간까지
              필요한 기간만큼 편리하게 이용하실 수 있도록
              신차급 차량을 준비했습니다.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-white">
                <CarFront
                  className="text-yellow-400"
                  size={20}
                />
                세단 · SUV · 승합차
              </div>

              <div className="flex items-center gap-3 text-white">
                <Clock3
                  className="text-yellow-400"
                  size={20}
                />
                일렌트 · 주렌트 · 월렌트
              </div>
                            <div className="flex items-center gap-3 text-white">
                <ShieldCheck
                  className="text-yellow-400"
                  size={20}
                />
                철저한 차량관리
              </div>

            </div>

            <button
              type="button"
              onClick={() => scrollToSection("vehicle")}
              className="mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-black active:scale-95"
            >
              차량 둘러보기
              <ArrowRight size={18} />
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}