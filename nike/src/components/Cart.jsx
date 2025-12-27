import AirforceGreen from "../assets/airforce-green.avif";

function Cart({ isOpen, onClose, count }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[30%] max-md:w-full bg-white z-[1000] p-5 shadow-2xl
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <i
        onClick={onClose}
        className="fa-solid fa-xmark text-xl fixed right-5 top-5 p-1 rounded-md hover:bg-gray-200 cursor-pointer"
      ></i>

      <h1 className="text-2xl max-md:text-xl font-semibold text-center">
        Shopping Cart ({count})
      </h1>
      <p className="text-gray-500 mt-2 text-center">
        Review your items before checkout
      </p>

      {/* Empty Cart */}
      {count <= 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center space-y-4">
          <i className="fa-solid fa-bag-shopping text-gray-300 text-7xl max-md:text-5xl"></i>
          <p className="text-lg font-[inter] max-md:text-lg">Your cart is empty</p>
          <p className="mt-2 text-gray-500 max-md:text-sm">
            Add some products to get started
          </p>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 cursor-pointer rounded-xl max-md:text-xs"
          >
            Continue Shopping
          </button>
        </div>
      )}

      
      
    </div>
  );
}

export default Cart;
