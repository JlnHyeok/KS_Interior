import React from "react"
import { Menu } from "../../units/menu/Menu"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full h-20 flex justify-center text-white bg-[#5A4E47]">
      <div className="flex w-[80%] ">
        {/* LOGO */}
        <div className="GmarketBoldFont text-center flex items-center text-[24px] w-[30%]">
          KS INTERIOR
        </div>
        <nav className="NotoMediumFont w-[45%] !text-[16px] relative text-center flex justify-around items-center box-border ">
          <Menu
            title="회사소개"
            menus={["회사개요", "기업문화", "연혁", "수상내역", "오시는길"]}
          />
          <Menu
            title="시공갤러리"
            menus={[
              "시공사례",
              "스타일갤러리",
              "서비스안내",
              "공지사항",
              "리뷰",
            ]}
          />
          <Menu
            title="스토어"
            menus={[
              "전체상품",
              "조명",
              "인테리어시공",
              "셀프인테리어",
              "홈케어",
            ]}
          />
          <Menu
            title="이벤트"
            menus={[
              "이벤트",
              "당첨자발표",
              "당첨자후기",
              "커스텀스튜디오",
              "2023박람회",
            ]}
          />
          <Menu
            title="쇼룸안내"
            menus={[
              "방문예약",
              "VR쇼룸방문예약",
              "쇼룸검색",
              "NEW쇼룸",
              "온라인쇼룸",
            ]}
          />
        </nav>
        <div className="text-center flex justify-center items-center w-[25%]">
          <Link href="/login">
            <span className="text-xs ml-2">로그인</span>
          </Link>
          <span className="text-xs ml-2 mb-1">|</span>
          <span className="text-xs ml-2">회원가입</span>
        </div>
      </div>
    </header>
  )
}
