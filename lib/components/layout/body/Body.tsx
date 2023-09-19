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
  { src: "/img/review/dummy_1.png", alt: "first_review" },
  { src: "/img/review/dummy_2.png", alt: "second_review" },
  { src: "/img/review/dummy_3.png", alt: "third_review" },
  { src: "/img/review/dummy_4.png", alt: "fourth_review" },
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
        <section className="w-full aspect-[1.9/1] bg-white flex justify-center">
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
          {/* <Image
            className="w-full !h-auto !relative"
            src="/img/article/notice_consult.svg"
            alt="KS Interior"
            fill
          /> */}
        </section>
      </article>
    </main>
  )
}
