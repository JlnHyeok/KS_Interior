import React, { useRef, useState } from "react"
import { ImageWrap } from "../../../units/image/ImageWrap"
import { Variants, motion } from "framer-motion"
import { MotionDiv, MotionH1, MotionP } from "../../../motion/motionTag"

interface IProps {
  title: string
  isMobile?: boolean
  className?: string
  bgInfo?: { src: string; alt: string }
  imgInfo?: { src: string; alt: string }[]
  divider?: boolean
  contents?: string
  button?: React.ReactNode
  card?: { components: React.ReactNode[]; style: string }
  movie?: { components: React.ReactNode[]; style: string[] }
  review?: { components: React.ReactNode; style: string }
}

const emojiVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      rotateY: {
        duration: 0.6,
      },
      y: {
        type: "spring",
        damping: 9,
        stiffness: 50,
        restDelta: 0.01,
        duration: 0.3,
      },
    },
  },
}

export const Article = (props: IProps) => {
  const scrollRef = useRef(null)
  const [mobileCardBest, setMobileCardBest] = useState(1)

  return (
    <div className={`w-full relative ${props.className && props.className}`}>
      {/* Background Image */}
      {props.bgInfo && (
        <ImageWrap
          imgInfo={{ src: props.bgInfo?.src, alt: props.bgInfo?.alt }}
        />
      )}
      <div className="absolute z-10 w-full h-[80%] top-[12%] box-border ">
        {/* Title Section */}
        <MotionH1
          className="GmarketBoldFont w-[370px] text-center text-[36px] m-auto md:w-[90%]"
          animationEffect={emojiVariants}
          amount={props.isMobile ? 0.3 : 0.7}
          scrollRef={scrollRef}
        >
          {props.title}
        </MotionH1>

        {props.divider && (
          <MotionDiv
            className="w-[20px] h-[1px] bg-[#333333] m-auto mt-8 md:w-[100px]"
            amount={props.isMobile ? 0.3 : 0.7}
            scrollRef={scrollRef}
            animationEffect={emojiVariants}
          />
        )}

        {/* Context Section */}
        {props.contents && (
          <MotionP
            className="NotoMediumFont text-[16px] break-all m-auto w-[80%] mt-[9%] md:w-[720px] md:mt-[6%]"
            animationEffect={emojiVariants}
            scrollRef={scrollRef}
            amount={0.4}
          >
            {props.contents}
          </MotionP>
        )}

        {/* Button Section */}
        {props.button && (
          <MotionDiv
            children={props.button}
            className="flex justify-center absolute w-full bottom-4"
            animationEffect={emojiVariants}
            amount={props.isMobile ? 0.3 : 0.7}
            scrollRef={scrollRef}
          />
        )}

        {/* Card Section */}
        {props.card && (
          <div className="relative mt-[7%] flex justify-center gap-[4%] w-[80%] mx-auto h-[80%] box-border md:mt-[4%]">
            {props.isMobile ? (
              <div className="w-full h-full NotoMediumFont">
                <div className="w-full h-[42px] flex items-center justify-between px-8 box-border">
                  <button
                    autoFocus
                    onClick={() => setMobileCardBest(1)}
                    className={`pb-2 h-[28px] text-[#5A4E47] text-lg focus:outline-none border-black ${
                      mobileCardBest === 1 ? "border-b-2" : "text-[#5a4e4757]"
                    }`}
                  >
                    트렌디 화이트
                  </button>
                  <button
                    onClick={() => setMobileCardBest(2)}
                    className={`pb-2 h-[28px] text-[#5A4E47] text-lg focus:outline-none border-black ${
                      mobileCardBest === 2 ? "border-b-2" : "text-[#5a4e4757]"
                    }`}
                  >
                    트렌디 내추럴
                  </button>
                </div>
                <div
                  className={`w-full mt-4 absolute bg-red-200 duration-200 ${
                    mobileCardBest === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {props.card.components[0]}
                </div>
                <div
                  className={`w-full mt-4 absolute bg-red-200 duration-200 ${
                    mobileCardBest === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {props.card.components[1]}
                </div>
              </div>
            ) : (
              props.card.components.map((card, index) => (
                <MotionDiv
                  key={index}
                  children={card}
                  className={props.card!.style}
                  amount={0.2}
                  scrollRef={scrollRef}
                  animationEffect={emojiVariants}
                />
              ))
            )}
          </div>
        )}

        {/* Movie Section */}
        {props.movie && (
          <div className="mt-[1.5%] flex justify-center gap-10 w-[100%] mx-auto h-[75%] box-border items-center ">
            <MotionDiv
              children={props.movie.components[0]}
              className={props.movie!.style[0]}
              amount={0.2}
              scrollRef={scrollRef}
              animationEffect={emojiVariants}
            />
            <MotionDiv
              children={props.movie.components[1]}
              className={`${
                props.movie!.style[1]
              } flex-col flex items-center justify-between `}
              amount={0.2}
              scrollRef={scrollRef}
              animationEffect={emojiVariants}
            />
          </div>
        )}

        {/* Review Section */}
        {props.review && (
          <MotionDiv
            className="mt-[1.5%] flex justify-center w-[1050px] mx-auto h-[75%] box-border items-center"
            children={props.review.components}
            amount={0.2}
            scrollRef={scrollRef}
            animationEffect={emojiVariants}
          />
        )}
      </div>
    </div>
  )
}
