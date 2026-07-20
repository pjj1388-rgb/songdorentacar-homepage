"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5,000+",
    title: "누적 이용 고객",
  },
  {
    number: "24H",
    title: "사고대차 접수",
  },
  {
    number: "365",
    title: "연중무휴 상담 배차",
  },
  {
    number: "100%",
    title: "전 금연 차량",
  },
];

export default function StatisticsSection() {
  return (
    <section className="bg-gradient-to-b from-[#111111] to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-yellow-400 tracking-[6px] text-sm font-semibold">
            OUR RECORD
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            한솔네트웍스 송도지점
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            고객이 선택하는 이유를 숫자로 보여드립니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-5xl font-black text-yellow-400">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}