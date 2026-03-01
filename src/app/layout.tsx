// Next.js에서 제공하는 Metadata 타입을 불러옵니다. (페이지의 제목, 설명 등을 설정할 때 사용)
import type { Metadata } from "next";

// 브라우저 기본 폰트 대신 구글 폰트인 Geist와 Geist Mono를 불러옵니다.
import { Geist, Geist_Mono } from "next/font/google";

// 전역(글로벌) CSS 스타일을 불러옵니다. (Tailwind 설정 등이 포함되어 있음)
import "./globals.css";

// Geist Sans 폰트를 설정하고, CSS 변수로 사용할 수 있도록 만듭니다.
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS에서 사용할 변수 이름
  subsets: ["latin"], // 라틴어 알파벳만 포함하여 폰트 용량을 줄입니다.
});

// Geist Mono 폰트(고정폭 폰트)를 설정합니다. 주로 코드를 표시할 때 씁니다.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS에서 사용할 변수 이름
  subsets: ["latin"], // 라틴 문자 지원
});

// 이 페이지의 기본 메타데이터(SEO 등)를 정의합니다.
export const metadata: Metadata = {
  title: "스마트 스쿨 허브", // 브라우저 탭에 표시될 제목입니다.
  description: "교사와 학생을 위한 스마트 스쿨 플랫폼입니다.", // 검색 엔진이 읽어갈 설명입니다.
};

// 모든 페이지의 뼈대가 되는 '루트 레이아웃(최상위 껍데기)' 컴포넌트입니다.
export default function RootLayout({
  children, // 자식 컴포넌트들(각 페이지들)이 이곳으로 들어옵니다.
}: Readonly<{
  children: React.ReactNode; // children 변수에 들어올 수 있는 타입을 정의합니다.
}>) {
  // 실제 HTML 구조를 반환합니다.
  return (
    // html 태그를 엽니다. 문서의 언어를 영어(en)에서 한국어(ko)로 변경하는 것도 가능합니다.
    <html lang="ko">
      <body
        // body 태그에 위에서 만든 구글 폰트 변수들과 글꼴 부드럽게(antialiased) 효과를 적용합니다.
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 이 부분에 개별 페이지(page.tsx 등)의 내용이 채워집니다. */}
        {children}
      </body>
    </html>
  );
}
