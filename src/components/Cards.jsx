import React, { useState, useEffect } from "react";

function Cards({ img, type, name, quantity, price, setCount }) {
  function addToCart() {
    setCount((prevCount) => prevCount + 1);
  }

  const [toast, setToast] = useState(false);

  return (
    <section className="px-8 py-5 overflow-hidden ">
      <div className="bg-white max-md:shadow-md w-80 max-md:w-full mt-5 rounded-xl group mx-auto">
        {/* Image */}
        <div className="w-full h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-md
              group-hover:scale-[1.04]
              transition-transform duration-200"
          />
        </div>

        {/* Info */}
        <div className="mt-4 p-2 hover:shadow-xl transition-all duration-300">
          <p className="text-orange-400">{type}</p>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-gray-500">{quantity}</p>
          <p>{price}</p>
          <button
            onClick={() => {
              addToCart();
              setToast(true);
            }}
            className="text-center bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-pink-400 transition-all max-md:text-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Toast notification */}
      <div
        className={`fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all ${
          toast ? " opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p>Item added to cart!</p>
      </div>
    </section>
  );
}

export default Cards;
