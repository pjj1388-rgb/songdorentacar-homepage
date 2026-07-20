import FadeIn from "./FadeIn";
export default function ReviewSection() {
  const reviews = [
    {
      name: "김○○ 고객님",
      text: "갑작스러운 사고였는데 차량을 정말 빠르게 준비해주셔서 너무 감사했습니다.",
    },
    {
      name: "이○○ 고객님",
      text: "차량 상태가 정말 깨끗했고 직원분들도 친절했습니다. 다음에도 이용하겠습니다.",
    },
    {
      name: "박○○ 고객님",
      text: "보험사와 사고처리까지 친절하게 안내해주셔서 편하게 이용했습니다.",
    },
  ];

  return (
    <section
      id="review"
      className="bg-gradient-to-b from-[#101010] to-black py-28"
    ><FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-yellow-400 tracking-[6px] text-sm">
            CUSTOMER REVIEW
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            고객 후기
          </h2>

          <p className="mt-4 text-gray-400">
            실제 고객님들의 만족 후기입니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                "{review.text}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                  {review.name.substring(0,1)}
                </div>

                <div>
                  <div className="text-white font-semibold">
                    {review.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    네이버 리뷰
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      </FadeIn>
    </section>
  );
}