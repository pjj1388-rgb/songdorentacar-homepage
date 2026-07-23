"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cars = [
  {
    name: "디 올 뉴 그랜저 GN7",
    image: "/cars/grandeur.jpg",
    desc: "프리미엄 세단 · 사고대차 · 단기렌트",
    badge: "BEST",
  },
  {
    name: "카니발 9인승",
    image: "/cars/carnival.jpg",
    desc: "가족여행 · 6인 탑승 시 버스전용차로 이용",
    badge: "FAMILY",
  },
  {
    name: "디 올 뉴 싼타페",
    image: "/cars/santafe.jpg",
    desc: "프리미엄 SUV · 단기렌트",
    badge: "SUV",
  },
  {
    name: "QM6",
    image: "/cars/qm6.jpg",
    desc: "가성비 SUV · 사고대차",
    badge: "SUV",
  },
  {
    name: "XM3",
    image: "/cars/xm3.jpg",
    desc: "가성비 SUV · 단기렌트",
    badge: "RENAULT",
  },
  {
    name: "더 뉴 그랜저 IG",
    image: "/cars/grandeurig.jpg",
    desc: "가성비 세단",
    badge: "SEDAN",
  },
  {
    name: "디 올 뉴 그랜저 2",
    image: "/cars/grandeur1.jpg",
    desc: "프리미엄 세단",
    badge: "GN7",
  },
  {
    name: "디 올 뉴 그랜저 3",
    image: "/cars/grandeur2.jpg",
    desc: "프리미엄 세단",
    badge: "GN7",
  },
  {
    name: "카니발 9인승 2",
    image: "/cars/carnival2.jpg",
    desc: "가족여행 · 단체 이동",
    badge: "9인승",
  },
];

export default function VehicleSlider() {
  return (
    <section className="bg-[#0b0b0b] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold tracking-[6px] text-yellow-400">
            PREMIUM FLEET
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            프리미엄 보유 차량
          </h2>

          <p className="mt-5 text-gray-400">
            사고대차 · 단기렌트 모두 가능한 신차급 차량
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.name}>
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-500/20">

                <div className="relative h-72 overflow-hidden">

                  <div className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
                    {car.badge}
                  </div>

                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-black text-white">
                    {car.name}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-300">
                    {car.desc}
                  </p>

                  <a
                    href="tel:01022213110"
                    className="mt-8 block rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-center font-bold text-black transition hover:scale-105"
                  >
                    📞 차량 문의
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}