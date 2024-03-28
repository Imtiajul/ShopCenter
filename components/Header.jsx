import Image from "next/image"
import Logo from "./Logo"

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/svg/menu.svg"
            width={5}
            height={5}
            className="lg:hidden w-5 h-5"
            alt="hamburg icon"
          />
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/svg/avatar.svg"
          width={18}
          height={18}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          src="/svg/shopping-Cart.svg"
          className="block w-5 h-5"
          alt="shopping cart icon"
          width={5}
          height={5}
        />
      </div>
    </nav>
  )
}

export default Header
