"use client"
import Image from "next/image"
import React from "react"
import { BannerSlider } from "../../units/slider/BannerSlider"
import { ImageWrap } from "../../units/image/ImageWrap"
import { Article } from "./article/Article"
import { Button } from "../../units/button/Button"
import { Card } from "../../units/card/Card"
import { MovieMain, MovieSmall } from "../../units/movieSmall/Movie"
import { MultiSlider } from "../../units/slider/MultiSlider"

const imgInfo = [
  { src: "/img/banner/first_banner.jpeg", alt: "first_banner" },
  { src: "/img/banner/second_banner.jpeg", alt: "second_banner" },
  { src: "/img/banner/third_banner.jpeg", alt: "third_banner" },
  { src: "/img/banner/fourth_banner.jpeg", alt: "fourth_banner" },
]
const reviewImgInfo = [
  {
    src: "/img/review/dummy_1.png",
    alt: "first_review",
    title: "꼼꼼하게 시공해주셔서 너무 너무 감사합니다.",
    subTitle: "트렌디 화이트",
    content:
      "제가 원했던 느낌대로 시공해주시려고 노력하는 모습에 너무 좋았습니다 ㅎㅎ",
    score: 5,
    date: "2023 - 03 - 12",
  },
  {
    src: "/img/review/dummy_2.png",
    alt: "second_review",
    title: "평소에 고민하던 거실 인테리어를 해결해주셔서 감사합니다.",
    subTitle: "트렌디 화이트",
    content:
      "평소에 고민하던 거실 인테리어를 새롭게 바꾸고 나니까 거실 분위기가 더 잘 사는거같아요. 만족합니다",
    score: 4,
    date: "2023 - 04 - 20",
  },
  {
    src: "/img/review/dummy_3.png",
    alt: "third_review",
    title: "전체적으로 톤을 맞춰주셔서 너무 만족스럽습니다. 훨씬 깔끔해졌어요.",
    subTitle: "트렌디 화이트",
    content:
      "톤을 맞추고 싶어서 의뢰했어요~ 너무 예쁘게 잘 해주셔서 완전 만족이구요 제가 원하는 느낌으로 딱 잘 됐어요.",
    score: 5,
    date: "2023 - 04 - 23",
  },
  {
    src: "/img/review/dummy_4.png",
    alt: "fourth_review",
    title: "이번에 사무실 이전하면서 새로 배치를 바꾸고 싶어서 의뢰했어요. ",
    subTitle: "트렌디 화이트",
    content:
      "사무실을 이전하면서 새롭게 인테리어를 했는데 생각한것보다 더 좋은 방향으로 바뀌게 된거같아서 너무 좋아요.",
    score: 5,
    date: "2023 - 05 - 12",
  },
]

const whiteButton: React.ReactNode = (
  <Button
    context="바로가기"
    buttonTheme="white-button"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)
const brownButton: React.ReactNode = (
  <Button
    context="바로가기"
    buttonTheme="brown-button"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)
const firstCard: React.ReactNode = (
  <Card
    title="트렌디 화이트"
    imgInfo={{ src: "/img/card/first_card.svg", alt: "first_card" }}
    content="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
    button={brownButton}
  />
)
const secondCard: React.ReactNode = (
  <Card
    title="트렌디 내추럴"
    imgInfo={{ src: "/img/card/second_card.svg", alt: "second_card" }}
    content="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
    button={brownButton}
  />
)

export const Body = () => {
  return (
    <main className="w-full min-h-screen relative">
      <article className="w-full">
        {/* First Section (Slide) */}
        <div className="relative w-full aspect-[2.08/1]">
          <BannerSlider
            imgInfo={imgInfo}
            className="aspect-[2.08/1] relative"
          />
        </div>

        {/* Second Section (Vision) */}
        <Article
          className="aspect-[2.75/1]"
          title="KS Interior vision"
          bgInfo={{ src: "/img/vision/vision_bg.svg", alt: "Vision" }}
          divider={true}
          contents="Lorem ipsum dolor sit amet consectetur. Eu cursus arcu maecenas
        tristique eu sed purus. Tempus neque in ac id scelerisque eget justo
        tempor nisl. Velit sapien facilisi magnis bibendum. Tincidunt facilisi
        nisl pharetra quam morbi."
          button={whiteButton}
        />

        {/* Third Section (Best)*/}
        <Article
          title="Best Interior Trend"
          className="aspect-[16/8] max-h-[800px] bg-[#dfd3c354]"
          card={{
            components: [firstCard, secondCard],
            style: "w-[35%] h-[100%] max-w-[400px]",
          }}
        />

        {/* Fourth Section (Movie) */}
        <section className="w-full aspect-[2.08/1] flex justify-center">
          <div className="w-[85%] flex justify-center ">
            <Article
              title="시공 영상"
              movie={{
                components: [<MovieMain />, <MovieSmall />],
                style: ["w-[50%] h-[95%] ", "w-[35%] h-[95%]"],
              }}
            />
          </div>
        </section>

        {/* Fifth Section (Service) */}
        <section className="w-full aspect-[6.5/1] flex justify-center items-center bg-[#5A4E47]">
          <div className="w-[80%] flex justify-center items-center">
            <h1 className="w-[70%] GmarketBoldFont text-center text-[3rem] text-white">
              10초면 충분한 빠른 견적 서비스
            </h1>
            <Button
              context="바로가기"
              buttonTheme="white-button"
              onClick={() => {
                window.location.href = "#"
              }}
            />
          </div>
        </section>

        {/* Sixth Section (Review) */}
        <section className="w-full aspect-[2/1] max-h-[700px]  bg-white flex justify-center">
          <Article
            title="시공 후기"
            review={{
              components: <MultiSlider imgInfo={reviewImgInfo} />,
              style: "",
            }}
          />
        </section>

        {/* Seventh Section (Noti & Consult) */}
        <section>
          <Image
            className="w-full !h-auto !relative"
            src="/img/article/notice_consult.svg"
            alt="KS Interior"
            fill
          />
        </section>
      </article>
    </main>
  )
}
