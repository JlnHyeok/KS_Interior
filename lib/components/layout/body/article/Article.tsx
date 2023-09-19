import React, { useRef } from "react"
import { ImageWrap } from "../../../units/image/ImageWrap"
import { Variants, motion } from "framer-motion"
import { MotionDiv, MotionH1, MotionP } from "../../../motion/motionTag"

interface IProps {
  title: string
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
          className="GmarketBoldFont text-center text-[36px]"
          animationEffect={emojiVariants}
          amount={0.7}
          scrollRef={scrollRef}
        >
          {props.title}
        </MotionH1>

        {props.divider && (
          <MotionDiv
            className="w-[100px] h-[1px] bg-[#333333] m-auto mt-8"
            amount={0.7}
            scrollRef={scrollRef}
            animationEffect={emojiVariants}
          />
        )}

        {/* Context Section */}
        {props.contents && (
          <MotionP
            className="NotoMediumFont mt-[6%] text-[16px] break-all  m-auto w-[720px]"
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
            amount={0.7}
            scrollRef={scrollRef}
          />
        )}

        {/* Card Section */}
        {props.card && (
          <div className="mt-[3%] flex justify-center gap-[5%] w-[80%] mx-auto h-[80%] box-border">
            {props.card.components.map((card, index) => (
              <MotionDiv
                key={index}
                children={card}
                className={props.card!.style}
                amount={0.2}
                scrollRef={scrollRef}
                animationEffect={emojiVariants}
              />
            ))}
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
            className="mt-[1.5%] flex justify-center w-[1100px] mx-auto h-[75%] box-border items-center"
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
