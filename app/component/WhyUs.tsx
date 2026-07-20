import FadeIn from "./FadeIn";
export default function WhyUs() {
  const items = [
    {
      icon: "🚗",
      title: "신차급 차량",
      text: "철저한 관리와 금연 차량으로 항상 쾌적한 상태를 유지합니다.",
    },
    {
      icon: "🛡️",
      title: "사고대차 전문",
      text: "보험사 절차부터 차량 배차 수리공업사 입고 출고 차량반납까지 원스톱으로 도와드립니다.",
    },
    {
      icon: "⏰",
      title: "24시간 상담",
      text: "365일 언제든지 상담 및 긴급 배차가 가능합니다.",
    },
    {
      icon: "📍",
      title: "송도 즉시 배차",
      text: "송도·연수구를 중심으로 빠르고 정확하게 차량을 전달합니다.",
    },
  ];

  return (
    <section
      id="service"
      className="bg-gradient-to-b from-black via-[#0d0d0d] to-[#111] py-28"
    ><FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-yellow-400 tracking-[6px] text-sm font-semibold">
          WHY HANSOL
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-white">
          왜 한솔네트웍스인가?
        </h2>

        <p className="mt-5 text-center text-gray-400 text-lg">
          고객이 만족할 수 있는 프리미엄 렌터카 서비스를 제공합니다.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-400/40
                hover:bg-white/10
                hover:shadow-2xl
                hover:shadow-yellow-500/20
              "
            >
              <div className="text-6xl transition duration-500 group-hover:scale-125">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
      </FadeIn>
    </section>
  );
}