import { Variants, motion } from "framer-motion"

interface IProps {
  children?: React.ReactNode
  amount: number
  scrollRef: React.MutableRefObject<null>
  className?: string
  animationEffect: Variants
}

export const MotionDiv = ({
  children,
  scrollRef,
  className,
  amount,
  animationEffect,
}: IProps) => {
  return (
    <motion.div
      key={className}
      whileInView="visible"
      initial="hidden"
      className={className}
      variants={animationEffect}
      viewport={{ root: scrollRef, once: true, amount: amount }}
    >
      {children}
    </motion.div>
  )
}

export const MotionH1 = ({
  children,
  scrollRef,
  className,
  amount,
  animationEffect,
}: IProps) => {
  return (
    <motion.h1
      whileInView="visible"
      initial="hidden"
      className={className}
      variants={animationEffect}
      viewport={{ root: scrollRef, once: true, amount: amount }}
    >
      {children}
    </motion.h1>
  )
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

export const MotionWrapper = ({
  children,
  className,
  isMobile,
}: {
  children: React.ReactNode
  className?: string
  isMobile?: boolean
}) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={!isMobile ? pageEffect : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
const pageEffect = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: "100%",
  },
}
