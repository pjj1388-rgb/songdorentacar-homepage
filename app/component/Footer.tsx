export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* 회사소개 */}
          <div>
            <h3 className="text-2xl font-black text-white">
              한솔네트웍스
              <span className="text-yellow-400"> 송도지점</span>
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              사고대차 · 단기렌트 전문
              <br />
              24시간 상담 · 연중무휴
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h4 className="text-lg font-bold text-white">
              MENU
            </h4>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li><a href="#service" className="hover:text-yellow-400">사고대차</a></li>
              <li><a href="#vehicle" className="hover:text-yellow-400">보유차량</a></li>
              <li><a href="#review" className="hover:text-yellow-400">고객후기</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">문의하기</a></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-bold text-white">
              CONTACT
            </h4>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>📞 010-2221-3110</p>

              <p>🕒 24시간 · 연중무휴</p>

              <a
                href="https://blog.naver.com/songdorentacar"
                target="_blank"
                className="block hover:text-yellow-400"
              >
                📝 네이버 블로그
              </a>

              <a
                href="https://map.naver.com/p/entry/place/1559855268"
                target="_blank"
                className="block hover:text-yellow-400"
              >
                📍 네이버 플레이스
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © 2026 HANSOL NETWORKS SONGDO. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
