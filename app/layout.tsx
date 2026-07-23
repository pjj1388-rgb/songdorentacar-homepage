import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한솔네트웍스 송도지점 | 송도 단기렌트 · 사고대차 전문",

  description:
    "한솔네트웍스 송도지점은 송도 단기렌트와 사고대차 전문업체입니다. 신차급 차량 보유, 24시간 상담, 인천·송도 렌터카 서비스를 제공합니다.",

  keywords: [
    "한솔네트웍스 송도지점",
    "한솔네트웍스",
    "송도렌트카",
    "송도 단기렌트",
    "송도 사고대차",
    "인천렌트카",
    "인천 사고대차",
    "인천 단기렌트",
    "카니발 렌트",
    "그랜저 렌트",
    "교통사고렌트",
    "인천렌트카",
    "인천사고대차",
    "SUV 렌트",
    "사고대차",
    "단기렌트",
    "24시렌트카",
    "원스톱사고처리서비스",
  ],

  openGraph: {
    title: "한솔네트웍스 송도지점",
    description:
      "송도 단기렌트 · 사고대차 전문 | 신차급 차량 보유 | 24시간 상담",
    url: "https://songdorentacar.com",
    siteName: "한솔네트웍스 송도지점",
    locale: "ko_KR",
    type: "website",
  },

  alternates: {
    canonical: "https://songdorentacar.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}