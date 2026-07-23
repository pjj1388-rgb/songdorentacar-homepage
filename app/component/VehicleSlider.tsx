"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Car {
  name: string;
  image: string;
  desc: string;
  badge: string;
  stock: string;
}

interface Props {
  cars: Car[];
}

export default function VehicleSlider({ cars }: Props) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      spaceBetween={20}
      slidesPerView={1}
    >
      {cars.map((car) => (
        <SwiperSlide key={car.name}>
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            {/* 이미지 */}
            <div className="relative aspect-[16/10]">

              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />

              <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                {car.badge}
              </div>

            </div>

            {/* 내용 */}

            <div className="flex min-h-[180px] flex-col justify-between p-6">

              <div>

                <h3 className="text-2xl font-black text-gray-900">
                  {car.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {car.desc}
                </p>

              </div>

              <div className="mt-6 flex items-center justify-between">

                <span className="font-bold text-yellow-600">
                  {car.stock}
                </span>

                <a
                  href="tel:01022213110"
                  className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:scale-105"
                >
                  상담하기
                </a>

              </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}