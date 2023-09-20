import React from "react"

interface IProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>
  sideBar: boolean
  isClose?: boolean
}

export const HamburgerIcon = ({ onClick, sideBar, isClose }: IProps) => {
  return (
    <div
      onClick={() => onClick(!sideBar)}
      className={`${
        isClose ? "close" : "hamburger"
      } md:hidden w-20 h-20 absolute left-0 flex flex-col items-center justify-center gap-2`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
