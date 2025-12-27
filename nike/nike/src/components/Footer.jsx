function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-5 font-[ubuntu] flex justify-between max-md:flex-col max-md:space-y-8">
      <ul className="text-gray-400 space-y-3">
        <h2 className="font-bold text-white">FIND A STORE</h2>
        <li>
          <a href="#">Become a Member</a>
        </li>
        <li>
          <a href="#">Sign Up for Email </a>
        </li>
        <li>
          <a href="#">Send Us Feedback </a>
        </li>
        <li>
          <a href="#">Students Discounts</a>
        </li>
      </ul>

      <ul className="text-gray-400 space-y-3">
        <h2 className="font-bold text-white">GET HELP</h2>
        <li>
          <a href="#">Order Status</a>
        </li>
        <li>
          <a href="#">Delivery </a>
        </li>
        <li>
          <a href="#">Send Us Feedback </a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
        <li>
          <a href="#">Payment Options</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <ul className="text-gray-400 space-y-3">
        <h2 className="font-bold text-white">ABOUT NIKE</h2>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Careers </a>
        </li>
        <li>
          <a href="#">Investors</a>
        </li>
        <li>
          <a href="#">Sustainability</a>
        </li>
      </ul>

      {/* SOCIAL MEDIA ICONS */}
      <div className="flex space-x-4 mt-5">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </footer>
  );
}
export default Footer;
