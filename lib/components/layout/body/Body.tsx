"use client"
import Image from "next/image"
import React from "react"
import { Slider } from "../../units/slider/Slider"
import { ImageWrap } from "../../units/image/ImageWrap"
import { Article } from "../article/Article"
import { Button } from "../../units/button/Button"
import { Card } from "../../units/card/Card"
import { MovieSmall } from "../../units/movieSmall/MovieSmall"

const imgInfo = [
  { src: "/img/banner/first_banner.jpeg", alt: "first_banner" },
  { src: "/img/banner/second_banner.jpeg", alt: "second_banner" },
  { src: "/img/banner/third_banner.jpeg", alt: "third_banner" },
  { src: "/img/banner/fourth_banner.jpeg", alt: "fourth_banner" },
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

export const Body = () => {
  const firstCard: React.ReactNode = (
    <Card
      title="트렌디 화이트"
      imgInfo={{ src: "/img/card/first_card.svg", alt: "first_card" }}
      context="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
      button={brownButton}
    />
  )
  const secondCard: React.ReactNode = (
    <Card
      title="트렌디 내추럴"
      imgInfo={{ src: "/img/card/second_card.svg", alt: "second_card" }}
      context="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
      button={brownButton}
    />
  )
  return (
    <main className="w-full min-h-screen xl:h-[5000px] relative">
      <article className="w-full">
        {/* First Section (Slide) */}
        <div className="relative w-full aspect-[2.08/1]">
          <Slider imgInfo={imgInfo} className="aspect-[2.08/1]" />
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
          bgInfo={{ src: "/img/article/best_bg.svg", alt: "Best" }}
          card={{
            components: [firstCard, secondCard],
            style: "w-[35%] h-[100%]",
          }}
        />

        {/* Fourth Section (Movie) */}
        <section className="w-full min-h-[700px] h-[60%] flex justify-center">
          <div className="w-[88%] min-w-[1100px] flex justify-center">
            <Article
              title="시공 영상"
              movie={{
                components: [
                  <div className="h-full flex items-center">
                    <iframe
                      className="w-full h-[95%]"
                      src="https://www.youtube.com/embed/xGjVPFsJlEQ?si=l6yuVQti6CrOsWQ4"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>,
                  <MovieSmall />,
                ],
                style: ["w-[55%] h-[95%] ", "w-[35%] h-[95%]"],
              }}
            />
          </div>
        </section>

        {/* Fifth Section (Service) */}
        <section>
          <ImageWrap
            imgInfo={{
              src: "/img/article/service.svg",
              alt: "KS Interior Service",
            }}
          />
        </section>

        {/* Sixth Section (Review) */}
        <section className="w-full bg-white flex justify-center">
          <div className="w-[65%] pb-20 box-border flex justify-center">
            <Image
              className="w-full !h-auto !relative"
              src="/img/article/review.svg"
              alt="KS Interior"
              fill
            />
          </div>
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
