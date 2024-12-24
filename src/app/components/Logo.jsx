import Logo from "../assets/logo3.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent flex justify-center items-center py-4">
      <Image
        src={Logo}
        alt="Company Logo"
        width={100}
        height={100}
        priority
        className="object-contain"
        onError={(e) => (e.target.style.display = "none")}
      />
    </header>
  );
};

export default Header;
