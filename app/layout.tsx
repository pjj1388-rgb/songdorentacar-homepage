import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://songdorentacar.co.kr"),

  title: {
    default: "한솔네트웍스 송도지점 | 송도단기렌트 · 사고대차",
    template: "%s | 한솔네트웍스 송도지점",
  },

  description:
    "송도단기렌트, 사고대차 전문업체. 신차급 차량 보유, 24시간 상담, 딜리버리 서비스, 금연차량 운영.",

  keywords: [
    "송도렌트카",
    "송도단기렌트",
    "송도사고대차",
    "인천렌트카",
    "인천사고대차",
    "한솔네트웍스",
    "카니발렌트",
    "그랜저렌트",
    "벤츠S400",
  ],

  openGraph: {
    title: "한솔네트웍스 송도지점",
    description:
      "송도단기렌트 · 사고대차 전문업체",
    url: "https://songdorentacar.co.kr",
    siteName: "한솔네트웍스 송도지점",
    locale: "ko_KR",
    type: "website",

    images: [
      {
        url: "/hero/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}