import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/lws-logo-black.svg"
        className="h-10"
        alt="logo"
        width={120}
        height={40}
      />
    </Link>
  )
}

export default Logo
