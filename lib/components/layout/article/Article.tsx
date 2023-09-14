import React, { useRef } from "react"
import { ImageWrap } from "../../units/image/ImageWrap"
import { motion } from "framer-motion"

interface IProps {
  title: string
  bgInfo?: { src: string; alt: string }
  imgInfo?: { src: string; alt: string }[]
  divider?: boolean
  contents?: string
  button?: React.ReactNode
  card?: React.ReactNode[]
}

const emojiVariants = {
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
        damping: 3,
        stiffness: 50,
        restDelta: 0.01,
        duration: 0.3,
      },
    },
  },
}

export const Article = (props: IProps) => {
  const scrollRef = useRef(null)
  function motionH1(children: React.ReactNode) {
    return (
      <motion.h1
        className="GmarketBoldFont text-center text-[36px]"
        variants={emojiVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef, once: true, amount: 0.7 }}
      >
        {children}
      </motion.h1>
    )
  }
  function motionDiv(children: React.ReactNode, className: string) {
    return (
      <motion.div
        className={className}
        variants={emojiVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef, once: true, amount: 0.4 }}
      >
        {children}
      </motion.div>
    )
  }
  function motionP(children: React.ReactNode) {
    return (
      <motion.p
        className="NotoMediumFont mt-[6%] text-[16px] break-all  m-auto w-[720px]"
        variants={emojiVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef, once: true, amount: 0.4 }}
      >
        {children}
      </motion.p>
    )
  }

  return (
    <div className="w-full relative">
      {props.bgInfo && (
        <ImageWrap
          imgInfo={{ src: props.bgInfo?.src, alt: props.bgInfo?.alt }}
        />
      )}
      <div className="absolute z-10 w-full h-[80%] top-[12%] box-border ">
        {motionH1(props.title)}
        {props.divider && (
          <div className="w-[100px] h-[1px] bg-[#333333] m-auto mt-8"></div>
        )}
        {props.contents && motionP(props.contents)}
        {props.button &&
          motionDiv(
            props.button,
            "flex justify-center absolute w-full bottom-4"
          )}
        <div className="mt-10 flex justify-evenly w-[80%] mx-auto h-full box-border">
          {props.card &&
            props.card.map((card) =>
              motionDiv(
                card,
                "w-[35%] h-[82%] bg-white relative rounded-md shadow-[4px_4px_20px_0_rgba(0,0,0,0.2)]"
              )
            )}
        </div>
      </div>
    </div>
  )
}
