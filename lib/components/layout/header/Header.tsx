import React from "react"
import { Menu } from "../../units/menu/Menu"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full h-20  relative flex justify-center text-white bg-[#5A4E47]">
      <div className="flex w-full relative  justify-center md:justify-normal md:w-[80%]">
        <div className="md:hidden w-20 h-20  absolute left-0 flex items-center justify-center">
          Ham Icon
        </div>
        {/* LOGO */}
        <div className="justify-center  GmarketBoldFont text-center flex items-center w-[60%] text-[24px] md:w-[30%] md:justify-normal">
          KS INTERIOR
        </div>
        <nav className="md:flex md:justify-around md:items-center box-border NotoMediumFont w-[45%] !text-[16px] relative text-center hidden ">
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
        <div className="md:flex md:justify-center md:items-center w-[25%] text-center hidden">
          <Link href="/login">
            <span className="text-xs ml-2">로그인</span>
          </Link>
          <span className="text-xs ml-2 mb-0">|</span>
          <Link href="#">
            <span className="text-xs ml-2">회원가입</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
