'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Phone, GraduationCap, Users, LayoutDashboard, Award, TrendingUp } from "lucide-react"

// 임시 학생 데이터 (1~3학년 통합)
const SAMPLE_STUDENTS = [
  { id: 1, name: "홍길동", grade: "1", class: "1", phone: "010-1234-5678", certCount: 3, goal: "전기직 공무원", status: "등교" },
  { id: 2, name: "김철수", grade: "1", class: "2", phone: "010-2222-3333", certCount: 1, goal: "삼성전자 취업", status: "등교" },
  { id: 3, name: "이영희", grade: "2", class: "1", phone: "010-4444-5555", certCount: 5, goal: "한국전력공사", status: "현장실습" },
  { id: 4, name: "박창우", grade: "3", class: "1", phone: "010-9999-8888", certCount: 4, goal: "대학 진학", status: "현장실습" },
]

export default function TeacherDashboard() {
  const [searchTerm, setSearchTerm] = useState("") 
  const [activeGrade, setActiveGrade] = useState("all") // 기본값을 '전체(all)'로 설정

  const filteredStudents = SAMPLE_STUDENTS.filter(student => 
    student.name.includes(searchTerm) && (activeGrade === "all" || student.grade === activeGrade)
  )

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* 왼쪽 사이드바 */}
      <div className="w-64 bg-slate-900 text-white hidden md:flex flex-col p-6 space-y-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <LayoutDashboard className="text-blue-400" /> 스마트 스쿨
        </h2>
        <nav className="space-y-4">
          <div className="text-blue-400 font-semibold text-sm">학생 관리</div>
          <div className="pl-2 space-y-2 text-sm">
            <div className="cursor-pointer font-bold text-white border-l-2 border-blue-400 pl-2">전체 명렬표</div>
            <div className="cursor-pointer text-slate-400 hover:text-white pl-2">자격증 현황</div>
          </div>
        </nav>
      </div>

      {/* 오른쪽 메인 화면 */}
      <main className="flex-1 p-8 space-y-8">
        {/* 상단 통계 카드 (1~3학년 전체 현황) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500 shadow-sm"><CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500">전체 학생수</p>
            <h3 className="text-2xl font-bold">124명</h3>
          </CardContent></Card>
          <Card className="border-l-4 border-l-orange-500 shadow-sm"><CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500">평균 자격증</p>
            <h3 className="text-2xl font-bold">3.2개</h3>
          </CardContent></Card>
          <Card className="border-l-4 border-l-green-500 shadow-sm"><CardContent className="pt-6">
            <p className="text-sm font-medium text-slate-500">현장실습률</p>
            <h3 className="text-2xl font-bold">85%</h3>
          </CardContent></Card>
        </div>

        {/* 통합 명렬표 판넬 */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-6">
            <CardTitle className="text-xl font-bold">학생 통합 명렬표</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="이름 검색..." className="pl-9 bg-slate-50" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <Tabs value={activeGrade} onValueChange={setActiveGrade} className="w-full">
              <TabsList className="bg-slate-100 p-1">
                <TabsTrigger value="all" className="px-8">전체보기</TabsTrigger>
                <TabsTrigger value="1" className="px-8">1학년</TabsTrigger>
                <TabsTrigger value="2" className="px-8">2학년</TabsTrigger>
                <TabsTrigger value="3" className="px-8">3학년</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b">
                  <tr><th className="px-6 py-4">이름</th><th className="px-6 py-4">학년/반</th><th className="px-6 py-4">자격증</th><th className="px-6 py-4">상태</th><th className="px-6 py-4 text-right">연락</th></tr>
                </thead>
                <tbody className="divide-y bg-white">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold flex items-center gap-3"><GraduationCap className="w-4 h-4 text-blue-500" />{student.name}</td>
                      <td className="px-6 py-4">{student.grade}학년 {student.class}반</td>
                      <td className="px-6 py-4"><Badge className="bg-blue-50 text-blue-700">🏅 {student.certCount}개</Badge></td>
                      <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${student.status === '등교' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{student.status}</span></td>
                      <td className="px-6 py-4 text-right"><a href={`tel:${student.phone}`} className="p-2 bg-slate-100 rounded-full inline-block"><Phone className="w-4 h-4" /></a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}