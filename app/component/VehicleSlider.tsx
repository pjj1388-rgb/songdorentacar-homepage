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
      autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={1}
    >
      {cars.map((car) => (
        <SwiperSlide key={car.name}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-60">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />

              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {car.badge}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">{car.name}</h3>

              <p className="text-gray-600 mt-2">{car.desc}</p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-semibold">
                  {car.stock}
                </span>

                <a
                  href="tel:01022213110"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
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