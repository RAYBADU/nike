import { useState } from "react";

function Newsletter() {
  const [IsEmpty, setIsEmpty] = useState(true);

  return (
    <div className="w-full h-auto md:w-[40rem] lg:w-[50rem] xl:w-[60rem] px-8 py-8 pb-10  bg-white shadow-md mx-auto rounded-md text-center">
      <h1 className="text-3xl max-md:text-xl font-semibold font-[inter]">
        Stay Connected
      </h1>
      <p className=" text-gray-500 font-[inter] pt-2 max-md:text-sm">
        Be the first to know about new releases, exclusive offers, and the
        latest Nike news.
      </p>

      <div className="mt-4 flex justify-center space-x-4 max-md:flex-col max-md:space-y-4">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="h-10 rounded bg-gray-100 outline-0 px-4 w-80 max-md:w-full max-md:text-sm"
        />

        <button
          className={`bg-black text-white px-8 py-2 rounded-md font-[ubuntu] cursor-pointer hover:opacity-[0.8] transition-all max-md:text-sm`}
        >
          Subscribe
        </button>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        By subscribing, you agree to Nike's Privacy Policy and Terms of Use.
      </p>
    </div>
  );
}
export default Newsletter;
