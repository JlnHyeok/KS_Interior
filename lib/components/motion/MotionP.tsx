import { Variants, motion } from "framer-motion"
import React from "react"

interface IProps {
  children?: React.ReactNode
  amount: number
  scrollRef: React.MutableRefObject<null>
  className: string
  animationEffect: Variants
}

export const MotionP = ({
  children,
  scrollRef,
  className,
  amount,
  animationEffect,
}: IProps) => {
  return (
    <motion.p
      whileInView="visible"
      initial="hidden"
      className={className}
      variants={animationEffect}
      viewport={{ root: scrollRef, once: true, amount: amount }}
    >
      {children}
    </motion.p>
  )
}
