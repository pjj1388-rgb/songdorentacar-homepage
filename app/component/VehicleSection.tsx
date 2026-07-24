"use client";

import VehicleSlider from "@/app/component/VehicleSlider";
import Image from "next/image";

interface Car {
  name: string;
  image: string;
  desc: string;
  badge: string;
  stock: string;
}

const cars = [
  {
    name: "벤츠 S400d",
    image: "/hero/hero.jpg",
    desc: "VIP 의전 · 프리미엄 단기렌트",
    badge: "VIP",
    stock: "보유 1대",
  },
  {
    name: "디 올 뉴 그랜저 GN7",
    image: "/cars/grandeur.jpg",
    desc: "준대형 세단 · 깔끔하고 편안한 승차감",
    badge: "BEST",
    stock: "보유 3대",
  },
  {
    name: "더 뉴 그랜저 IG",
    image: "/cars/grandeurig.jpg",
    desc: "준대형 세단 · 편안한 가성비",
    badge: "SEDAN",
    stock: "보유 1대",
  },
  {
    name: "쏘나타 디 엣지",
    image: "/cars/sonata.jpg",
    desc: "중형 세단 · 합리적인 가격",
    badge: "SEDAN",
    stock: "보유 1대",
  },
  {
    name: "디 올 뉴 싼타페 MX5",
    image: "/cars/santafe.jpg",
    desc: "6인승 SUV · 풀옵션 차량",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "더 뉴 쏘렌토 MQ4",
    image: "/cars/sorento.jpg",
    desc: "5인승 SUV · 넓고 편안한 공간",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "QM6",
    image: "/cars/qm6.jpg",
    desc: "가성비 SUV · 경제적인 선택",
    badge: "SUV",
    stock: "보유 1대",
  },
  {
    name: "XM3",
    image: "/cars/xm3.jpg",
    desc: "가성비 소형 SUV · 도심 주행에 최적",
    badge: "SUV",
    stock: "보유 2대",
  },
  {
    name: "카니발 KA4 페이스리프트",
    image: "/cars/carnival.jpg",
    desc: "9인승 · 가족여행 · 6인 이상 버스전용차로 이용 가능",
    badge: "FAMILY",
    stock: "보유 2대",
  },
  {
    name: "스타리아 9인승",
    image: "/cars/staria.jpg",
    desc: "9인승 · 가족여행 · 6인 이상 버스전용차로 이용 가능",
    badge: "FAMILY",
    stock: "보유 1대",
  },
];

export default function VehicleSection() {
  return (
    <section
      id="vehicle"
      className="bg-gradient-to-b from-white to-gray-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="font-semibold tracking-[5px] text-yellow-500">
            PREMIUM FLEET
          </p>

          <h2 className="mt-4 text-5xl font-black text-gray-900">
            보유 차량
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            한솔네트웍스 송도지점 신차급 차량
          </p>

        </div>

        {/* 모바일 */}

        <div className="lg:hidden">
          <VehicleSlider cars={cars} />
        </div>

        {/* PC */}

        <div className="hidden gap-8 lg:grid lg:grid-cols-3">
                  {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* 이미지 */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="33vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                  {car.badge}
                </div>
              </div>

              {/* 내용 */}
              <div className="flex min-h-[190px] flex-col justify-between p-6">

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
                    className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
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