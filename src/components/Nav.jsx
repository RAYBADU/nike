import { useState } from "react";
import Logo from "../assets/nike.svg";

function Nav({ count, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-8 max-md:px-5 flex justify-between items-center shadow fixed w-full top-0 z-[1000]">
      {/* Logo */}
      <img src={Logo} alt="Nike Logo" className="w-18" />

      {/* LINKS (Desktop) */}
      <ul className="flex space-x-4 max-md:hidden">
        <li className="hover:text-gray-500 transition"><a href="#">Home</a></li>
        <li><a href="#">Men</a></li>
        <li className="hover:text-gray-500 transition"><a href="#">Women</a></li>
        <li><a href="#">Kids</a></li>
        <li className="hover:text-gray-500 transition"><a href="#">Sale</a></li>
        <li className="hover:text-gray-500 transition"><a href="#">Sneakers</a></li>
      </ul>

      {/* SEARCH INPUT (Desktop) */}
      <div className="max-md:hidden relative">
        <input
          type="text"
          className="shadow-xs border-0 rounded-full py-2 px-4 bg-gray-100 outline-0 pl-10"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      {/* ICONS */}
      <div className="space-x-4 flex items-center">
        <i className="fa-regular fa-heart cursor-pointer transition duration-200"></i>

        {/* Cart Icon */}
        <div
          onClick={onCartClick} // <- function from App
          className="relative cursor-pointer"
        >
          <i className="fa-solid fa-cart-shopping text-xl transition duration-200"></i>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
              {count}
            </span>
          )}
        </div>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden p-1 rounded-md hover:bg-gray-200 cursor-pointer"
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-white z-[1000] fixed inset-0 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <i
          onClick={() => setIsMenuOpen(false)}
          className="fa-solid fa-xmark text-xl fixed right-5 top-5 p-1 rounded-md hover:bg-gray-200 cursor-pointer"
        ></i>

        <img src={Logo} alt="Nike Logo" className="w-20 mx-auto mt-20" />
        <ul className="text-center space-y-5 mt-20">
          <li className="hover:text-gray-500 transition"><a href="#">Home</a></li>
          <li><a href="#">Men</a></li>
          <li className="hover:text-gray-500 transition"><a href="#">Women</a></li>
          <li><a href="#">Kids</a></li>
          <li className="hover:text-gray-500 transition"><a href="#">Sale</a></li>
          <li className="hover:text-gray-500 transition"><a href="#">Sneakers</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
