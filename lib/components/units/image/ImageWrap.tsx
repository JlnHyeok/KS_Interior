import Image from "next/image"
import React from "react"
import { Link } from 'next/link';

interface IProps {
  imgInfo: {
    src: string
    alt: string
    index?: number
    link?: string
    className?: string
  }
}

export const ImageWrap = ({ imgInfo }: IProps) => {
  return imgInfo.link ? (
    <Link href="#" key={imgInfo.alt + imgInfo?.index}>
      <div>
        <Image
          alt={imgInfo.alt}
          src={imgInfo.src}
          className={`!relative ${imgInfo.className}`}
          blurDataURL={imgInfo.src}
          placeholder="blur"
          fill
        />
      </div>
    </Link>
  ) : (
    <div key={imgInfo.alt + imgInfo?.index}>
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
