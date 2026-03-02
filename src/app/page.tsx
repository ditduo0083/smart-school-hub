// Next.js에 내장된 이미지 최적화 컴포넌트를 불러옵니다.
import Image from "next/image";

// 홈페이지의 기본 화면을 그리는 함수(컴포넌트)를 만들고 내보냅니다.
export default function Home() {
  // 화면에 보여줄 요소를 반환(return)합니다.
  return (
    // 화면 전체를 채우는 배경을 만들고, 내용을 가운데로 모으는 랩퍼(wrapper) 역할을 합니다.
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      {/* 실제 페이지 내용이 들어가는 메인 영역입니다. 넓이를 제한(max-w-3xl)해 보기 좋게 만듭니다. */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start text-center sm:text-left">

        {/* 아주 큰 환영 메시지를 렌더링합니다. */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          환영합니다! 스마트 스쿨 허브입니다 👋
        </h1>

        {/* 안내 문구를 작은 회색 글씨로 렌더링합니다. */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 w-full max-w-xl">
          이곳은 교사용과 학생용 시스템을 아우르는 메인 허브입니다.
          shadcn/ui 부품 세트와 Tailwind CSS가 성공적으로 설치되었습니다.
        </p>

        {/* 프로젝트가 잘 셋업되었는지 확인하는 안내 상자입니다. */}
        <div className="w-full bg-gray-100 dark:bg-zinc-900 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-2">✅ 초기 설정 완료</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Next.js 15 (App Router) 설치 완료</li>
            <li>Tailwind CSS 설정 적용 완료</li>
            <li>shadcn/ui 초기화 완료 (.env.local 저장)</li>
          </ul>
        </div>

        {/* 행동을 유도하는 버튼 영역입니다. (버튼 역할을 하지만 링크 형태를 띄고 있음) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition"
            href="/login"
          >
            교사 로그인 (2450!)
          </a>
          <a
            className="rounded-full bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition"
            href="/login"
          >
            학생 로그인 (kse2026)
          </a>
        </div>
      </main>
    </div>
  );
}
