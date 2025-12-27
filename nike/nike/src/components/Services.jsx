function Services({ name, img, desc }) {
  return (
    <div className="w-full h-auto p-5 text-center mx-auto  rounded-md">
      <img src={img} alt={name} className="w-12 max-md:w-8 mx-auto" />
      <p className="text-center text-lg max-md:text-sm font-semibold">{name}</p>
      <p className="mt-2 text-gray-500 max-md:text-sm">{desc}</p>
    </div>
  );
}
export default Services;
