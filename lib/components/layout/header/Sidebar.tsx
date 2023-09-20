import { AnimatePresence, motion } from "framer-motion"
import { HamburgerIcon } from "../../units/icon/HamburgerIcon"
import { Logo } from "../../units/logo/Logo"
import { menuList } from "@/lib/constants/data/menu"
import { Menu, SpreadMenu } from "../../units/menu/Menu"

export function Sidebar({
  sideBar,
  setSideBar,
}: {
  sideBar: boolean
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed overflow-x-scroll bg-[#5A4E47] text-white shadow-lg top-0 right-0 w-full h-screen z-50"
          >
            <header className="w-full h-20 relative flex justify-center text-white">
              <HamburgerIcon
                onClick={() => setSideBar(!sideBar)}
                sideBar={sideBar}
                isClose={true}
              />
              {/* LOGO */}
              <Logo logo="KS Interior" />
            </header>
            <div className="border-t-[1px] border-white  w-full h-full">
              {menuList.map((menu, index) => (
                <SpreadMenu
                  key={menu.title + index}
                  title={menu.title}
                  menus={menu.menus}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className="fixed h-full w-full flex items-center justify-center top-0 left-0 z-30"
          />
        </>
      )}
    </AnimatePresence>
  )
}
