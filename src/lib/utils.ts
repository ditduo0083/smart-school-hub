// clsx 모듈에서 clsx 함수와 ClassValue라는 타입을 불러옵니다. (조건부 CSS 클래스를 깔끔하게 묶어주는 도구)
import { clsx, type ClassValue } from "clsx"
// tailwind-merge 라이브러리에서 twMerge 함수를 불러옵니다. (충돌하는 Tailwind 클래스를 정리해주는 도구)
import { twMerge } from "tailwind-merge"

// cn (classNames) 이라는 이름의 재사용 가능한 유틸리티 함수를 정의하고 내보냅니다.
export function cn(...inputs: ClassValue[]) {
  // clsx를 사용해 전달받은 클래스 배열들을 하나의 문자열로 합치고,
  // twMerge로 넘겨 충돌되는 스타일(예: py-2 py-4가 같이 있으면 py-4만 남김)을 스마트하게 병합하여 반환합니다.
  return twMerge(clsx(inputs))
}
