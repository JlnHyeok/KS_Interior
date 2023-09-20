"use client"
import React, { useState } from "react"
import { CustomFlowbiteTheme, Dropdown, Flowbite } from "flowbite-react"

interface IProps {
  title: string
  menus: Array<string>
}

const customTheme: CustomFlowbiteTheme = {
  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: "focus:outline-none ",
    // Floating
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: " z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
      content: "text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
      header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
      hidden: "invisible opacity-0",
      // Item
      item: {
        container: "",
        base: "min-w-[100px] menu flex items-center rounded justify-center py-3 px-4 text-sm text-gray-600 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "bg-white text-gray-900",
        auto: "bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },

    inlineWrapper: "flex items-center",
  },
}

export const Menu = (props: IProps) => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Dropdown
        size=""
        trigger="hover"
        color="none"
        className="mt-2"
        arrowIcon={false}
        label={props.title}
      >
        {props.menus?.map((menu, index) => (
          <Dropdown.Item key={index}>{menu}</Dropdown.Item>
        ))}
      </Dropdown>
    </Flowbite>
  )
}

export const SpreadMenu = ({ title, menus }: IProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="w-full ">
      <div className={`w-[90%] border-b-[1px] border-white mx-auto`}>
        <div className="h-full">
          <div
            className="flex h-full justify-between items-center"
            onClick={() => setIsHover(!isHover)}
          >
            <span className="NotoMediumFont text-[18px] block">{title}</span>
            <span className="flex justify-end items-center h-[60px] w-[60px]">
              <span
                className={`bg-red-200 relative arrow ${
                  isHover
                    ? "after:rotate-[315deg] after:top-[0px]"
                    : "after:rotate-[135deg]"
                } after:duration-300`}
              ></span>
            </span>
          </div>
          <div
            className={`${
              isHover
                ? `h-[240px] opacity-100`
                : "h-0 overflow-hidden opacity-0"
            } bg-white text-black list-none duration-300`}
          >
            {menus?.map((menu, index) => (
              <li
                key={index}
                className="flex flex-col justify-center h-12 duration-300 hover:bg-gray-100"
              >
                <span className="NotoMediumFont text-[16px] ml-2 text-[#5A4E47]">
                  {menu}
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <ul className="overflow-hidden w-[80%]">
  <span className="NotoMediumFont mt-4 text-[18px] text-white block ">
    {title}
  </span>
  <div
    className={`${
      isHover ? "opacity-100" : "opacity-0 hidden"
    } bg-white duration-500 text-black`}
  >
    {menus?.map((menu, index) => (
      <li key={index}>
        <span>{menu}</span>
      </li>
    ))}
  </div>
</ul>
<span className="h-[60px] w-[60px]">아이콘</span> */
}
