import Image from "next/image";

const cars = [
  {
    name: "더 뉴 쏘렌토",
    image: "/cars/sorento.jpg",
    desc: "프리미엄 SUV · 사고대차 · 단기렌트",
  },
  {
    name: "벤츠 S400d",
    image: "/hero/hero.jpg",
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
    name: "쏘나타 디엣지",
    image: "/cars/sonata.jpg",
    desc: "신차급 컨디션 · 단기렌트",
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
    desc: "가성비 소형SUV · 사고대차 · 단기렌트",
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
   {
    name: "르노 xm3 2",
    image: "/cars/3483.jpg",
    desc: "가성비 소형SUV · 사고대차 · 단기렌트",
  },
     {
    name: "기아 K5",
    image: "/cars/k53091.jpg",
    desc: "가성비 중형 세단 · 사고대차 · 단기렌트",
  },
  {
    name: "스타리아 9인승",
    image: "/cars/staria.jpg",
    desc: "가족여행 승합 · 단체이동 · 단기렌트",
  },
];

export default function VehicleSection() {
  return (
    <section id="vehicle" className="bg-[#0c0c0c] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* 제목 */}
        <div className="text-center">
          <p className="text-yellow-400 tracking-[6px] text-sm font-semibold">
            PREMIUM FLEET
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            보유 차량
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            사고대차 · 단기렌트 모두 가능한 프리미엄 차량
          </p>
        </div>

        {/* 차량목록 */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#181818] shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/50 hover:shadow-yellow-500/20"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="text-3xl font-black text-white">
                  {car.name}
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  {car.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-sm text-yellow-300">
                    사고대차
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300">
                    단기렌트
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300">
                    금연차량
                  </span>
                </div>

                <a
                  href="tel:01022213110"
                  className="mt-8 block w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-center font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40"
                >
                  📞 차량 문의
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}