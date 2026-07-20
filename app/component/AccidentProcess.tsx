"use client";

import { ShieldCheck, ClipboardCheck, CarFront, CircleCheckBig } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "사고 접수",
    desc: "교통사고 발생 후 보험사에 사고를 접수합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "보험사 확인",
    desc: "대차 가능 여부를 확인후 010-2221-3110 으로 연락합니다.",
  },
  {
    icon: CarFront,
    title: "무료 차량 배차",
    desc: "수도권 전지역 원하는 장소까지 신속 배차.",
  },
  {
    icon: CircleCheckBig,
    title: "수리 완료 후 반납",
    desc: "수리 완료 시 차량을 수리차량은 직접회수하여 반납까지 딜리버리 해 드립니다.",
  },
];

export default function AccidentProcess() {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-yellow-400 tracking-[6px] font-semibold">
          ACCIDENT RENTAL
        </p>

        <h2 className="text-center text-5xl font-black text-white mt-4">
          사고대차 절차
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          보험사 확인부터 차량 배차 수리업체 픽&드랍 수리후 렌트반납까지 한솔네트웍스가 원스톱으로 도와드립니다.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="rounded-3xl bg-white/5 border border-white/10 p-10 text-center hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-20 h-20 rounded-full bg-yellow-400 mx-auto flex items-center justify-center">

                  <Icon size={36} className="text-black"/>

                </div>

                <h3 className="text-white text-2xl font-bold mt-8">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
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