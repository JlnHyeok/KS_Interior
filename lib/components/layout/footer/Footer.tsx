import Image from "next/image"
import React from "react"

export const Footer = () => {
  return (
    <footer>
      <section>
        <Image
          className="w-full !h-auto !relative"
          src="img/article/footer.svg"
          alt="KS Interior"
          fill
        />
      </section>
    </footer>
  )
}
