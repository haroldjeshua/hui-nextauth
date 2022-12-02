import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed h-14 w-full flex flex-nowrap  item-center mb-[2px] p-4 bg-[#121212] z-10">
      {/* Left Side */}
      <div className="flex grow items-center justify-">
        <Link href="/" className="flex">
          <Image
            src={Logo}
            alt="/"
            width="32"
            height="32"
            className="cursor-pointer z-10"
          />
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4"></div>
      </div>
      {/* Middle*/}
      {/* Right Side */}
    </div>
  );
};

export default Navbar;
