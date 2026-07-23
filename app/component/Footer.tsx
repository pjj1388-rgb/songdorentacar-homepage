import {
  Phone,
  MapPin,
  Clock3,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* 회사 */}

          <div>

            <h2 className="text-3xl font-black text-white">
              한솔네트웍스
              <span className="text-yellow-400">
                {" "}송도지점
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              송도단기렌트 · 사고대차 전문업체
              <br />
              신차급 차량과 프리미엄 서비스를 제공합니다.
            </p>

          </div>

          {/* 정보 */}

          <div className="space-y-5">

            <div className="flex gap-3">

              <Phone className="text-yellow-400" />

              <span className="text-gray-300">
                010-2221-3110
              </span>

            </div>

            <div className="flex gap-3">

              <MapPin className="text-yellow-400" />

              <span className="text-gray-300">
                인천광역시 연수구
              </span>

            </div>

            <div className="flex gap-3">

              <Clock3 className="text-yellow-400" />

              <span className="text-gray-300">
                24시간 상담 가능
              </span>

            </div>

          </div>

          {/* 링크 */}

          <div className="space-y-4">

            <a
              href="https://blog.naver.com/songdorentacar"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition"
            >
              <BookOpen size={18} />
              네이버 블로그
            </a>

            <a
              href="https://map.naver.com/p/entry/place/1559855268"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400 transition block"
            >
              네이버 플레이스
              <a
  href="https://www.daangn.com/kr/local-profile/so46fy4cm3qr/?referrer=share"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-yellow-400 transition block"
>
  🥕 당근마켓
</a>
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} 한솔네트웍스 송도지점 박종진.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}