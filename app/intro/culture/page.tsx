"use client"
import { MotionWrapper } from "@/lib/components/motion/motionTag"
import React from "react"
import { ImageWrap } from "../../../lib/components/units/image/ImageWrap"
import { motion } from "framer-motion"

const page = () => {
  const commonImgWrapClassName =
    "w-[250px] bg-[#000000c7] rounded-[10px] shadow-[2px_4px_12px_0_rgba(0,0,0,0.2)]"
  const commonImgClassName = "opacity-60 hover:opacity-80"
  const commonTitleStyle = "!text-[38px] !w-[180px]"
  const props = [
    {
      imgInfo: {
        src: "/img/intro/first_img.png",
        alt: "first_img",
      },
      innerText: {
        title: "인재제일",
      },
    },
    {
      imgInfo: {
        src: "/img/intro/second_img.png",
        alt: "second_img",
      },
      innerText: {
        title: "녹색경영",
      },
    },
    {
      imgInfo: {
        src: "/img/intro/third_img.png",
        alt: "third_img",
      },
      innerText: {
        title: "상생추구",
      },
    },
    {
      imgInfo: {
        src: "/img/intro/fourth_img.png",
        alt: "fourth_img",
      },
      innerText: {
        title: "책임경영",
      },
    },
  ]
  return (
    <div className="w-full h-[450px]">
      <MotionWrapper className="flex justify-center gap-6 items-center h-[450px] w-full">
        {props.map((prop, index) => (
          <motion.div
            className="rounded-[10px]"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <ImageWrap
              key={index}
              imgInfo={{ ...prop.imgInfo, className: commonImgClassName }}
              className={commonImgWrapClassName}
              innerText={{
                title: prop.innerText.title,
                titleStyle: commonTitleStyle,
              }}
            />
          </motion.div>
        ))}
      </MotionWrapper>
    </div>
  )
}

export default page
