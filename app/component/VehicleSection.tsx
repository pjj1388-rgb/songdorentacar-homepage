"use client";

import Image from "next/image";
import VehicleSlider from "@/app/component/VehicleSlider";

interface Car {
  name: string;
  image: string;
  desc: string;
  badge: string;
  stock: string;
}

const cars = [
  {
    name: "디 올 뉴 그랜저 GN7",
    image: "/cars/grandeur.jpg",
    desc: "신차급 · 사고대차 · 단기렌트",
    badge: "SEDAN",
    stock: "보유 3대",
  },
  {
    name: "카니발 9인승",
    image: "/cars/carnival.jpg",
    desc: "가족여행 · 6인 이상 버스전용차로",
    badge: "RV",
    stock: "보유 2대",
  },
  {
    name: "디 올 뉴 싼타페",
    image: "/cars/santafe.jpg",
    desc: "풀옵션 SUV · HUD · 썬루프",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "QM6",
    image: "/cars/qm6.jpg",
    desc: "가성비 SUV · 사고대차",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "더 뉴 쏘렌토",
    image: "/cars/sorento.jpg",
    desc: "프리미엄 SUV",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "벤츠 S400d",
    image: "/hero/hero.jpg",
    desc: "VIP 의전 · 프리미엄 단기렌트",
    badge: "LUXURY SEDAN",
    stock: "보유 1대",
  },
];

export default function VehicleSection() {
  return (
    <section
      id="vehicle"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            보유 차량
          </h2>

          <p className="mt-4 text-gray-600">
            한솔네트웍스 송도지점 신차급 렌트카
          </p>
        </div>

        {/* 모바일 */}
        <div className="block lg:hidden">
          <VehicleSlider cars={cars} />
        </div>

        {/* PC */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl duration-300"
            >
              <div className="relative h-64">
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
                <h3 className="text-xl font-bold">
                  {car.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {car.desc}
                </p>

                <div className="mt-5 flex justify-between items-center">
                  <span className="font-semibold text-blue-600">
                    {car.stock}
                  </span>

                  <a
                    href="tel:01022213110"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    상담하기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}