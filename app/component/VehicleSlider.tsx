"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cars = [
  {
    name: "더 뉴 쏘렌토",
    image: "/cars/sorento.jpg",
    desc: "프리미엄 SUV · 사고대차 · 단기렌트",
  },
  {
    name: "벤츠 S400d",
    image: "/hero/s400.jpg",
    desc: "VIP 의전 · 프리미엄 단기렌트",
  },
  {
    name: "디 올 뉴 그랜저",
    image: "/cars/grandeur.jpg",
    desc: "고급 세단 · 사고대차",
  },
  {
    name: "카니발 9인승",
    image: "/cars/carnival.jpg",
    desc: "가족여행 · 단체 이동",
  },
  {
    name: "디 올 뉴 싼타페",
    image: "/cars/santafe.jpg",
    desc: "SUV · 단기렌트",
  },
  {
  name: "르노 qm6",
  image: "/cars/qm6.jpg",
  desc: "가성비 SUV · 사고대차 · 단기렌트",
  },
  {
    name: "르노 xm3",
    image: "/cars/xm3.jpg",
    desc: "가성비 SUV · 사고대차 · 단기렌트",
  },
  {
  name: "더 뉴 그랜저 IG",
  image: "/cars/grandeurig.jpg",
  desc: "가성비세단 · 사고대차 · 단기렌트",
  },
  {
  name: "디 올 뉴 그랜저 2",
  image: "/cars/grandeur1.jpg",
  desc: "고급세단 · 사고대차 · 단기렌트",
  },
  {
  name: "디 올 뉴 그랜저 3",
  image: "/cars/grandeur2.jpg",
  desc: "고급세단 · 사고대차 · 단기렌트",
  },
   {
  name: "카니발 9인승 2",
  image: "/cars/carnival2.jpg",
  desc: "가족여행 · 단체이동 · 단기렌트",
  },
];


export default function VehicleSlider() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-yellow-400 tracking-[6px] font-semibold">
            PREMIUM FLEET
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            프리미엄 차량
          </h2>

          <p className="mt-5 text-gray-400">
            한솔네트웍스 송도지점 보유 차량
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
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
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818] shadow-xl">

                <div className="relative h-72">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    {car.name}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {car.desc}
                  </p>

                  <a
                    href="tel:01022213110"
                    className="mt-6 block rounded-xl bg-yellow-400 py-3 text-center font-bold text-black hover:bg-yellow-300 transition"
                  >
                    차량 문의
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