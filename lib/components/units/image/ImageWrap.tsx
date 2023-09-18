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
      <div className={className}>
        <Image
          alt={imgInfo.alt}
          src={imgInfo.src}
          className={`!relative ${imgInfo.className}`}
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          placeholder="blur"
          fill
        />
      </div>
    </Link>
  ) : (
    <div className={className} key={imgInfo.alt + imgInfo?.index}>
      <Image
        alt={imgInfo.alt}
        src={imgInfo.src}
        className={`!relative ${imgInfo.className}`}
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        placeholder="blur"
        fill
      />
    </div>
  )
}
