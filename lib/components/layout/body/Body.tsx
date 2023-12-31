"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { BannerSlider } from "../../units/slider/BannerSlider"
import { Article } from "./article/Article"
import { Button } from "../../units/button/Button"
import { Card } from "../../units/card/Card"
import { MovieMain, MovieSmall } from "../../units/movieSmall/Movie"
import { MultiSlider } from "../../units/slider/MultiSlider"
import {
  bannerDeskImgInfo,
  bannerMobileImgInfo,
  reviewImgInfo,
} from "@/lib/constants/data/image"
import { visionDeskInfo, visionMobileInfo } from "@/lib/constants/data/article"
import Link from "next/link"
import { MotionWrapper } from "../../motion/motionTag"

const WhiteButton: () => React.ReactNode = () => (
  <Button
    context="바로가기"
    buttonTheme="white-button"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)
const BrownButton: () => React.ReactNode = () => (
  <Button
    context="바로가기"
    buttonTheme="brown-button"
    onClick={() => {
      window.location.href = "#"
    }}
  />
)
const FirstCard: (props: any) => React.JSX.Element = ({
  isMobile,
}: {
  isMobile: boolean
}) => (
  <Card
    title="트렌디 화이트"
    className="w-full md:w-[380px]"
    imgInfo={{ src: "/img/card/first_card.svg", alt: "first_card" }}
    content="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
    button={!isMobile && <BrownButton />}
  />
)
const SecondCard: (props: any) => React.JSX.Element = ({
  isMobile,
}: {
  isMobile: boolean
}) => (
  <Card
    title="트렌디 내추럴"
    className="w-full md:w-[380px]"
    imgInfo={{ src: "/img/card/second_card.svg", alt: "second_card" }}
    content="Lorem ipsum dolor sit amet consectetur. Neque accumsan lectus tellus a dictumst arcu. Venenatis nec volutpat euismod a."
    button={!isMobile && <BrownButton />}
  />
)

export const Body = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <MotionWrapper className="w-full min-h-screen relative" isMobile={isMobile}>
      <article className="w-full">
        {/* First Section (Slide) */}
        <div className="relative md:w-full md:aspect-[2.08/1] aspect-[1/1.5]">
          <BannerSlider
            imgInfo={isMobile ? bannerMobileImgInfo : bannerDeskImgInfo}
            className="md:aspect-[2.08/1] aspect-[1/1.5] relative"
            isMobile={isMobile}
          />
        </div>

        {/* Second Section (Vision) */}
        <Article
          className="md:aspect-[2.75/1] aspect-[1/1.1]"
          divider={true}
          title={isMobile ? visionMobileInfo.title : visionDeskInfo.title}
          bgInfo={isMobile ? visionMobileInfo.bgInfo : visionDeskInfo.bgInfo}
          contents={
            isMobile ? visionMobileInfo.contents : visionDeskInfo.contents
          }
          button={<WhiteButton />}
        />

        {/* Third Section (Best)*/}
        <Article
          title="Best Interior Trend"
          className="md:aspect-[16/8] md:min-h-[780px] aspect-[1/1.9] max-h-[800px] bg-[#dfd3c354]"
          isMobile={isMobile}
          card={{
            components: [
              <FirstCard isMobile={isMobile} />,
              <SecondCard isMobile={isMobile} />,
            ],
          }}
        />

        {/* Fourth Section (Movie) */}
        <section className="w-full aspect-[1/1.8] md:aspect-[2.08/1] flex justify-center">
          <div className="w-full md:w-[85%] flex justify-center">
            <Article
              title="시공 영상"
              movie={{
                components: [<MovieMain />, <MovieSmall />],
              }}
            />
          </div>
        </section>

        {/* Fifth Section (Service) */}
        <section className="w-full aspect-[1.5/1] md:aspect-[6.5/1] flex justify-center items-center bg-[#5A4E47]">
          <div className="w-[80%] h-[200px] flex flex-col justify-around md:justify-center items-center md:h-auto md:flex-row">
            <h1 className="w-[220px] GmarketBoldFont text-center text-[30px] md:text-[3rem] text-white md:w-[70%]">
              10초면 충분한 빠른 견적 서비스
            </h1>
            <Link href="#">
              <Button context="바로가기" buttonTheme="white-button" />
            </Link>
          </div>
        </section>

        {/* Sixth Section (Review) */}

        <section className="w-full h-[600px] bg-gradient-to-t to-[#D9D9D900] from-[#DFD3C380] flex justify-center md:aspect-[2/1] md:max-h-[700px] md:bg-white md:from-white md:to-white md:h-auto">
          <Article
            title="시공 후기"
            review={{
              components: (
                <MultiSlider imgInfo={reviewImgInfo} isMobile={isMobile} />
              ),
              style: "",
            }}
          />
        </section>

        {/* Seventh Section (Noti & Consult) */}
        {!isMobile && (
          <section>
            <Image
              className="w-full !h-auto !relative"
              src="/img/article/notice_consult.svg"
              alt="KS Interior"
              fill
            />
          </section>
        )}
      </article>
    </MotionWrapper>
  )
}
