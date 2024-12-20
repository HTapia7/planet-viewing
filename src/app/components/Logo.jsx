import Logo from "../assets/logo3.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className="bg-transparent logo">
      <Image
        src={Logo}
        alt="image of logo"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Header
