import { useState } from "react";
import Logo from "../assets/nike.svg";

function Nav() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [slide, setSlide] = useState(false);

  return (
    <nav className="bg-white px-8 max-md:px-5 flex justify-between items-center shadow fixed w-full top-0 z-[1000]">
      <img src={Logo} alt="" className="w-18" />

      {/* LINKS */}
      <ul className="flex space-x-4 max-md:hidden">
        <li className="hover:text-gray-500 transition">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li className="hover:text-gray-500 transition">
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li className="hover:text-gray-500 transition">
          <a href="#">Sale</a>
        </li>
        <li className="hover:text-gray-500 transition">
          <a href="#">Sneakers</a>
        </li>
      </ul>

      {/* SEARCH INPUT */}

      <div className="max-md:hidden relative">
        <input
          type="text"
          className="shadow-xs border-0 rounded-full py-2 px-4 bg-gray-100 outline-0 pl-10"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>

      {/* ICONS */}
      <div className="space-x-4">
        <i
          onClick={() => setCount(count + 1)}
          className="fa-regular fa-heart cursor-pointer hover:scale-[1.2] transition-hover duration-200"
        ></i>
        <i
          onClick={() => setSlide(true)}
          className={`fa-solid fa-cart-shopping cursor-pointer hover:scale-[1.2] transition-hover duration-200 `}
        >
          <span>{count}</span>
        </i>
      </div>

      {/* HAM BTN */}
      <div
        onClick={() => setOpen(true)}
        className={`md:hidden p-1 rounded-md hover:bg-gray-200 cursor-pointer`}
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </div>

      {/* NAV MENU FOR SMALL DEVICES */}

      <div
        className={`bg-white z-[1000] fixed inset-0 transition-all duration-400   ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* close-btn */}
        <i
          onClick={() => setOpen(false)}
          className="fa-solid fa-xmark text-xl fixed right-5 top-5 p-1 rounded-md hover:bg-gray-200 cursor-pointer"
        ></i>
        <img src={Logo} alt="" className="w-20 mx-auto mt-20" />
        <ul className="text-center space-y-5  mt-20 ">
          <li className="hover:text-gray-500 transition">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li className="hover:text-gray-500 transition">
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li className="hover:text-gray-500 transition">
            <a href="#">Sale</a>
          </li>
          <li className="hover:text-gray-500 transition">
            <a href="#">Sneakers</a>
          </li>
        </ul>
      </div>

      {/* SIDE MENU FOR CART */}

      <div
        className={`bg-white h-screen  w-[30%] z-[1000] fixed right-0 top-0 p-5 transition-translate duration-300 max-md:hidden shadow-2xl ${
          slide ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <i
          onClick={() => setSlide(false)}
          className="fa-solid fa-xmark text-xl fixed right-5 top-5 p-1 rounded-md hover:bg-gray-200 cursor-pointer"
        ></i>
        <h1 className="text-2xl font-semibold">Shopping Cart ({count})</h1>
        <p className="text-gray-500 mt-2">Review your items before checkout</p>

        {/* Div containing empty bag and button */}

        {count <= 0 && (
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 ">
            <div className={`space-y-4 `}>
              <i className="fa-solid fa-bag-shopping text-gray-300 text-7xl"></i>
              <p className="text-lg  font-[inter]">Your cart is empty</p>
              <p className="mt-2 text-gray-500">
                Add some products to get started
              </p>
              <button
                onClick={() => setSlide(false)}
                className="bg-black text-white px-2 py-3 cursor-pointer rounded-xl"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Nav;
