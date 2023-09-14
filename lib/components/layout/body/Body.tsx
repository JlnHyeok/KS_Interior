"use client"
import Image from "next/image"
import React from "react"
import { Slider } from "../../units/slider/Slider"
import { ImageWrap } from "../../units/image/ImageWrap"
import { Article } from "../article/Article"
import { Button } from "../../units/button/Button"
import { Card } from "../../units/card/Card"

const imgInfo = [
  { src: "/img/banner/first_banner.jpeg", alt: "first_banner" },
  { src: "/img/banner/second_banner.jpeg", alt: "second_banner" },
  { src: "/img/banner/third_banner.jpeg", alt: "third_banner" },
  { src: "/img/banner/fourth_banner.jpeg", alt: "fourth_banner" },
]

const whiteButton: React.ReactNode = (
  <Button
    context="바로가기"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)
const brownButton: React.ReactNode = (
  <Button
    context="바로가기"
    textColor="white"
    bgColor="#5A4E47"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)

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

export const Body = () => {
  return (
    <main className="w-full min-h-screen ">
      <article>
        {/* First Section (Slide) */}
        <Slider imgInfo={imgInfo} />

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
          card={[firstCard, secondCard]}
        />

        {/* Fourth Section (Movie) */}
        <section className="w-full bg-white flex justify-center">
          <div className="w-[65%] flex justify-center">
            <Image
              className="!h-auto !relative"
              src="/img/article/movie.svg"
              alt="KS Interior"
              fill
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
