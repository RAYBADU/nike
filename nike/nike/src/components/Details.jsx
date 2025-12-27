function Details() {
  return (
    <section className="flex justify-between items-center px-8 max-md:flex-col">
      <div className="px-6 mt-5 py-5">
        <h1 className="text-3xl font-[inter] font-semibold max-md:text-xl">
          Featured Products
        </h1>
        <p className="text-gray-500 font-[ubuntu] max-md:text-sm">
          Discover our latest collection
        </p>
      </div>

      {/* Buttons to toggle different types of shoes */}
      <div className="shadow w-auto max-md:w-auto px-4 py-2 bg-gray-100 rounded-full flex justify-between max-md:text-sm">
        <button className="cursor-pointer p-2 hover:bg-white rounded-full">
          All
        </button>
        <button
          onClick={() => setSelect(true)}
          className={`cursor-pointer p-2 hover:bg-white rounded-full`}
        >
          Running
        </button>
        <button className="cursor-pointer p-2 hover:bg-white rounded-full">
          Basketball
        </button>
        <button className="cursor-pointer p-2 hover:bg-white rounded-full">
          Lifestyle
        </button>
        <button className="cursor-pointer p-2 hover:bg-white rounded-full">
          Dancing
        </button>
      </div>
    </section>
  );
}
export default Details;
