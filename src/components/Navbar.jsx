import { useState } from "react";
import AnimatedHamburgerButton from "./HamburgerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary h-[110px] pl-1 py-3 shadow-bottomShadow sticky top-0 z-50  md:px-10 lg:px-20">
      <div className="px-3 py-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://aethonint.digital/static/media/logo.a49e8448dffb11512dae.png"
              className="w-[120px] h-[85px]"
              alt="Tech Logo"
            />
          </a>
          <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
            <AnimatedHamburgerButton isOpen={isOpen} />
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto z-50`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 lg:mt-0 lg:border-0 bg-secondary lg:bg-transparent h-dropdownHeight lg:h-auto font-medium lg:font-semibold text-white mt-[18px] border-b-2 rounded-lg border-primary lg:border-none">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 lg:p-0 active:text-custom_blue hover:text-custom_blue transition-colors duration-300"
                  aria-current="page"
                >
                  HOME
                </a>
                <hr className="border-t-4 border-primary my-2 lg:hidden" />
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 lg:p-0 active:text-custom_blue hover:text-custom_blue transition-colors duration-300"
                >
                  ABOUT US
                </a>
                <hr className="border-t-4 border-primary my-2 lg:hidden" />
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 lg:p-0 active:text-custom_blue hover:text-custom_blue transition-colors duration-300"
                >
                  OUR WORK
                </a>
                <hr className="border-t-4 border-primary my-2 lg:hidden" />
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 lg:p-0 active:text-custom_blue hover:text-custom_blue transition-colors duration-300"
                >
                  OUR SERVICES
                </a>
                <hr className="border-t-4 border-primary my-2 lg:hidden" />
              </li>
              <li>
                <span className="hidden lg:inline-block items-center justify-center bg-custom_blue rounded-md px-8 py-2 lg:py-3 transition duration-300 ease-in-out hover:bg-primary hover:ring-2 hover:ring-custom_blue hover:text-custom_blue">
                  <a
                    href="#"
                    className="block py-2 px-3 lg:p-0 active:text-custom_blue"
                  >
                    CONTACT US
                  </a>
                </span>
                <a
                  href="#"
                  className="block lg:hidden py-2 px-3 lg:p-0 active:text-custom_blue hover:text-custom_blue transition-colors duration-300"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
