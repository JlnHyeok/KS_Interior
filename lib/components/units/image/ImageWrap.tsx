import Image from "next/image"
import React from "react"
import Link from "next/link"

interface IProps {
  className?: string
  imgInfo: {
    src: string
    alt: string
    index?: number
    link?: string
    className?: string
  }
}

export const ImageWrap = ({ imgInfo, className }: IProps) => {
  return imgInfo.link ? (
    <Link href="#" key={imgInfo.alt + imgInfo?.index}>
      <div className={`relative ${className}`}>
        <Image
          alt={imgInfo.alt}
          src={imgInfo.src}
          className={`!relative ${imgInfo.className}`}
          placeholder="blur"
          blurDataURL={imgInfo.src}
          fill
        />
      </div>
    </Link>
  ) : (
    <div className={`relative ${className}`} key={imgInfo.alt + imgInfo?.index}>
      <Image
        alt={imgInfo.alt}
        src={imgInfo.src}
        className={`!relative ${imgInfo.className}`}
        blurDataURL={imgInfo.src}
        placeholder="blur"
        fill
      />
    </div>
  )
}
