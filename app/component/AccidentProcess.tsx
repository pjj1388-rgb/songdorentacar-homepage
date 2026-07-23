"use client";

import {
  ShieldCheck,
  ClipboardCheck,
  CarFront,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "사고 접수",
    desc: "교통사고 발생 후 보험사에 사고를 접수합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "보험사 확인",
    desc: "보험사 대차 가능 여부를 확인한 뒤 한솔네트웍스로 연락합니다.",
  },
  {
    icon: CarFront,
    title: "무료 차량 배차",
    desc: "수도권 전 지역 원하는 장소까지 신속하게 무료 배차해드립니다.",
  },
  {
    icon: CircleCheckBig,
    title: "수리 완료 후 반납",
    desc: "수리 완료 시 차량을 직접 회수하여 반납까지 원스톱으로 진행합니다.",
  },
];

export default function AccidentProcess() {
  return (
    <section
      id="accident"
      className="relative overflow-hidden bg-black py-24 scroll-mt-28"
    >
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#facc1515,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-bold tracking-[8px] uppercase text-yellow-400">
          PREMIUM ACCIDENT SERVICE
        </p>

        <h2 className="mt-5 text-center text-4xl font-black text-white md:text-5xl">
          사고대차 진행절차
        </h2>

        <p className="mx-auto mt-6 mb-16 max-w-3xl text-center leading-8 text-gray-400">
          사고 접수부터 보험사 확인, 차량 배차,
          <br />
          수리 완료 후 차량 회수까지
          <span className="text-yellow-400 font-semibold">
            {" "}
            한솔네트웍스 송도지점
          </span>
          이 원스톱으로 진행해드립니다.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-yellow-500/20"
              >
                <div className="absolute right-6 top-5 text-6xl font-black text-white/5">
                  0{index + 1}
                </div>

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 transition duration-300 group-hover:scale-110">
                  <Icon size={36} className="text-black" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {step.desc}
                </p>

                <div className="mt-8 h-1 w-14 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-24" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}