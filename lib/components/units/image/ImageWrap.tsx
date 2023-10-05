import Image from "next/image"
import React from "react"
import Link from "next/link"
import { getPlaiceholder } from "plaiceholder"

interface IProps {
  className?: string
  imgBlur?: string
  imgInfo: {
    src: string
    alt: string
    index?: number
    link?: string
    className?: string
  }
  innerText?: {
    title: string
    titleStyle?: string
    content?: string
    contentStyle?: string
  }
}

const blurUrl =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="

export const ImageWrap = ({
  imgInfo,
  className,
  innerText,
  imgBlur,
}: IProps) => {
  return imgInfo.link ? (
    <Link href="#" key={imgInfo.alt + imgInfo?.index}>
      <div className={`relative ${className}`}>
        <Image
          alt={imgInfo.alt}
          src={imgInfo.src}
          className={`!relative z-0 ${imgInfo.className} ${imgBlur}`}
          placeholder="blur"
          blurDataURL={blurUrl}
          // {
          //   process.env.NODE_ENV === "development" ? imgInfo.src : undefined
          // }
          fill
        />
      </div>
    </Link>
  ) : (
    <div
      className={`relative z-0 ${className}`}
      key={imgInfo.alt + imgInfo?.index}
    >
      <Image
        alt={imgInfo.alt}
        src={imgInfo.src}
        className={`!relative ${imgInfo.className} ${imgBlur}`}
        blurDataURL={blurUrl}
        // {
        //   process.env.NODE_ENV === "development" ? imgInfo.src : undefined
        // }
        placeholder="blur"
        fill
      />
      {innerText && (
        <div className="z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white flex flex-col items-center">
          <h1
            className={`GmarketBoldFont text-[36px] w-[360px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)] md:w-full md:text-[48px] md:text-center md:drop-shadow-none ${innerText.titleStyle}`}
          >
            {innerText.title}
          </h1>
          <p
            className={`NotoMediumFont whitespace-pre-wrap text-[18px] w-[380px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.6)] md:w-full md:text-center md:drop-shadow-none ${innerText.contentStyle}`}
          >
            {innerText.content}
          </p>
        </div>
      )}
    </div>
  )
}
