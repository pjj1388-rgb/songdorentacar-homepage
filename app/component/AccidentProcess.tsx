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
    desc: "대차 가능 여부를 확인 후 010-2221-3110으로 연락합니다.",
  },
  {
    icon: CarFront,
    title: "무료 차량 배차",
    desc: "수도권 전 지역 원하는 장소까지 신속하게 배차해드립니다.",
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
      style={{ minHeight: "1000px", background: "red" }}
      className="bg-[#111] py-24 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-yellow-400 tracking-[6px] font-semibold">
          ACCIDENT RENTAL
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-white">
          사고대차 절차
        </h2>

        <p className="mt-5 mb-16 text-center text-gray-300">
          보험사 확인부터 차량 배차, 수리업체 픽업 & 드랍,
          수리 완료 후 렌트 반납까지
          <br />
          한솔네트웍스가 원스톱으로 도와드립니다.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">
                  <Icon size={36} className="text-black" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}