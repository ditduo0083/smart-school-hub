'use client' // 사용자가 버튼을 누르거나 검색하는 기능을 넣기 위해 사용합니다.

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs" // 방금 설치한 부품들입니다.
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // 방금 설치한 부품입니다.
import { Search, Phone, GraduationCap, Users } from "lucide-react"

/**
 * [가짜 데이터] 나중에 Supabase(DB)를 연결하면 이 부분은 사라집니다.
 * 지금은 화면이 잘 나오는지 확인하기 위해 임시로 넣어둔 명단입니다.
 */
const SAMPLE_STUDENTS = [
  { id: 1, name: "홍길동", grade: "1", class: "1", phone: "010-1234-5678", certCount: 3, goal: "전기직 공무원" },
  { id: 2, name: "김철수", grade: "1", class: "2", phone: "010-2222-3333", certCount: 1, goal: "삼성전자 취업" },
  { id: 3, name: "이영희", grade: "2", class: "1", phone: "010-4444-5555", certCount: 5, goal: "한국전력공사" },
]

export default function TeacherHomePage() {
  // [상태 저장] 사용자가 입력한 검색어와 선택한 학년을 컴퓨터가 기억합니다.
  const [searchTerm, setSearchTerm] = useState("") 
  const [activeGrade, setActiveGrade] = useState("1") 

  // [필터링] 전체 학생 중 검색어와 학년이 일치하는 학생만 골라냅니다.
  const filteredStudents = SAMPLE_STUDENTS.filter(student => 
    student.name.includes(searchTerm) && student.grade === activeGrade
  )

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-10">
      {/* 1. 상단 헤더 영역: 제목과 검색창 */}
      <div className="bg-white p-6 shadow-sm space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="text-blue-600" /> 통합 학생 관리
        </h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="학생 이름을 입력하세요..." 
            className="pl-10 h-12 bg-slate-100 border-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* 2. 학년 선택 탭 영역 */}
        <Tabs value={activeGrade} onValueChange={setActiveGrade} className="w-full">
          <TabsList className="grid grid-cols-3 w-full h-12">
            <TabsTrigger value="1" className="text-base font-medium">1학년</TabsTrigger>
            <TabsTrigger value="2" className="text-base font-medium">2학년</TabsTrigger>
            <TabsTrigger value="3" className="text-base font-medium">3학년</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* 3. 학생 리스트 카드 영역 */}
        <div className="space-y-3">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <Card key={student.id} className="border-none shadow-sm overflow-hidden">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-blue-600 w-6 h-6" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{student.name}</span>
                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                          🏅 {student.certCount}개
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">
                        {student.grade}학년 {student.class}반 | {student.goal}
                      </p>
                    </div>
                  </div>

                  <a href={`tel:${student.phone}`} className="p-3 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 text-slate-400 font-medium">
              해당하는 학생이 없습니다. 🧐
            </div>
          )}
        </div>
      </div>
    </div>
  )
}