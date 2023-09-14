import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IProps {
  imgInfo: { src: string; alt: string; index?: number }
}

export const ImageWrap = ({ imgInfo }: IProps) => {
  return (
    <Link href="#" key={imgInfo.alt + imgInfo?.index}>
      <div>
        <Image alt={imgInfo.alt} src={imgInfo.src} className="!relative" fill />
      </div>
    </Link>
  )
}
