import { useState, useEffect } from "react";

import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      }flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300 p-6`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="logo" width={80}></img>
        </a>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials/>
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
