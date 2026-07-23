"use client";

import {
  Phone,
  MapPin,
  Clock3,
  CarFront,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#111] to-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold tracking-[6px] text-yellow-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            한솔네트웍스
            <span className="text-yellow-400"> 송도지점</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            사고대차 · 단기렌트 전문업체
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl border border-white/10 bg-[#181818] p-10">

            <div className="space-y-8">

              <div className="flex gap-5">

                <Phone className="text-yellow-400" size={28} />

                <div>

                  <p className="text-sm text-gray-400">
                    전화문의
                  </p>

                  <h3 className="mt-1 text-3xl font-black text-white">
                    010-2221-3110
                  </h3>

                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-yellow-400" size={28} />

                <div>

                  <p className="text-sm text-gray-400">
                    위치
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    인천광역시 연수구
                  </h3>

                </div>

              </div>

              <div className="flex gap-5">

                <Clock3 className="text-yellow-400" size={28} />

                <div>

                  <p className="text-sm text-gray-400">
                    운영시간
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    24시간 상담 가능
                  </h3>

                </div>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="tel:01022213110"
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                전화상담
              </a>

              <a
                href="https://blog.naver.com/songdorentacar"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                블로그
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="grid gap-5">

            <div className="rounded-2xl bg-[#181818] p-7">
              <CarFront className="text-yellow-400" />
              <h3 className="mt-4 text-2xl font-bold text-white">
                사고대차
              </h3>
              <p className="mt-3 text-gray-400">
                보험사 사고접수부터 차량 배차까지
                빠르게 진행합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[#181818] p-7">
              <Truck className="text-yellow-400" />
              <h3 className="mt-4 text-2xl font-bold text-white">
                무료 딜리버리
              </h3>
              <p className="mt-3 text-gray-400">
                고객님 계신 곳까지
                차량을 전달해드립니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[#181818] p-7">
              <ShieldCheck className="text-yellow-400" />
              <h3 className="mt-4 text-2xl font-bold text-white">
                100% 금연차량
              </h3>
              <p className="mt-3 text-gray-400">
                신차급 컨디션으로
                항상 깨끗하게 관리합니다.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}