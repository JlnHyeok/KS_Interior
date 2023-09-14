import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IProps {
  imgInfo: { src: string; alt: string; index?: number; link?: string }
}

export const ImageWrap = ({ imgInfo }: IProps) => {
  return imgInfo.link ? (
    <Link href="#" key={imgInfo.alt + imgInfo?.index}>
      <div>
        <Image alt={imgInfo.alt} src={imgInfo.src} className="!relative" fill />
      </div>
    </Link>
  ) : (
    <div key={imgInfo.alt + imgInfo?.index}>
      <Image alt={imgInfo.alt} src={imgInfo.src} className="!relative" fill />
    </div>
  )
}
