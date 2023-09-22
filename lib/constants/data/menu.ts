export const menuList: Array<{
  title: string
  menus: Array<string>
  links: Array<string>
}> = [
  {
    title: "회사소개",
    menus: ["회사개요", "기업문화", "연혁", "수상내역", "오시는길"],
    links: [
      "/intro/outline",
      "/intro/culture",
      "/intro/history",
      "/intro/award",
      "/intro/location",
    ],
  },
  {
    title: "시공갤러리",
    menus: ["시공사례", "스타일갤러리", "서비스안내", "공지사항", "리뷰"],
    links: [
      "/gallery/example",
      "/gallery/style",
      "/gallery/service",
      "/gallery/notice",
      "/gallery/review",
    ],
  },
  {
    title: "스토어",
    menus: ["전체상품", "조명", "인테리어시공", "셀프인테리어", "홈케어"],
    links: [
      "/store/all",
      "/store/light",
      "/store/construction",
      "/store/self",
      "/store/care",
    ],
  },
  {
    title: "이벤트",
    menus: [
      "이벤트",
      "당첨자발표",
      "당첨자후기",
      "커스텀스튜디오",
      "2023박람회",
    ],
    links: [
      "/event/event",
      "/event/winner",
      "/event/review",
      "/event/studio",
      "/event/exhibition",
    ],
  },
  {
    title: "쇼룸안내",
    menus: ["방문예약", "VR쇼룸방문예약", "쇼룸검색", "NEW쇼룸", "온라인쇼룸"],
    links: [
      "/showroom/reservation",
      "/showroom/vr",
      "/showroom/search",
      "/showroom/new",
      "/showroom/online",
    ],
  },
]
