import { useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import Airforce from "./assets/airforce.avif";
import Airforce1 from "./assets/airforce-1.avif";
import AirforceGreen from "./assets/airforce-green.avif";
import Jordans from "./assets/jordans.avif";
import AirforceYellow from "./assets/airforce-yellow.avif";
import AirforceRed from "./assets/airforce-red.avif";
import HeroNike from "./assets/hero.avif";
import JordanPegasus from "./assets/jordan-pegasus.avif";
import FreeDelivery from "./assets/free-delivery.svg";
import Shield from "./assets/shield.svg";
import Returns from "./assets/returns.svg";
import Support from "./assets/support.svg";

function App() {
  // count of items in cart
  const [count, setCount] = useState(0);

  // cart visibility state (BOOLEAN ONLY)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // explicit actions (FUNCTIONS ONLY)
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cards = [
    {
      id: 1,
      img: Airforce,
      type: "Running",
      name: "Nike Air Max",
      quantity: "3 colors",
      price: `$${150}`,
    },
    {
      id: 2,
      img: Airforce1,
      type: "Lifestyle",
      name: "Nike Airforce 1",
      quantity: "5 colors",
      price: `$${110}`,
    },
    {
      id: 3,
      img: AirforceGreen,
      type: "Basketball",
      name: "Nike Zoom Freak",
      quantity: "2 colors",
      price: `$${130}`,
    },
    {
      id: 4,
      img: AirforceYellow,
      type: "Lifestyle",
      name: "Nike Air Max 97",
      quantity: "4 colors",
      price: `$${180}`,
    },
    {
      id: 5,
      img: Jordans,
      type: "Basketball",
      name: "Air Jordan 1 Retro",
      quantity: "6 colors",
      price: `$${170}`,
    },
    {
      id: 6,
      img: AirforceRed,
      type: "Running",
      name: "Nike Metcon 7",
      quantity: "3 colors",
      price: `$${140}`,
    },
    {
      id: 7,
      img: HeroNike,
      type: "Dancing",
      name: "Nike Air Jordan",
      quantity: "9 colors",
      price: `$${230}`,
    },
    {
      id: 8,
      img: JordanPegasus,
      type: "Dancing",
      name: "Jordan Pegasus 98",
      quantity: "1 color",
      price: `$${430}`,
    },
  ];

  const services = [
    {
      id: 1,
      img: FreeDelivery,
      name: "Free Shipping",
      desc: "Free delivery on orders over $150",
    },
    {
      id: 2,
      img: Returns,
      name: "Easy Returns",
      desc: "30 day return policy on all products",
    },
    {
      id: 3,
      img: Shield,
      name: "Secure Payments",
      desc: "100% secure payment processing",
    },
    {
      id: 4,
      img: Support,
      name: "24/7 Support",
      desc: "Expert customer service anytime",
    },
  ];

  return (
    <div>
      {/* NAV: only opens the cart */}
      <Nav count={count} onCartClick={openCart} />

      {/* CART: controlled by App */}
      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        count={count}
      />

      <Hero />
      <Details />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Cards
            key={card.id}
            img={card.img}
            type={card.type}
            name={card.name}
            quantity={card.quantity}
            price={card.price}
            setCount={setCount}
          />
        ))}
      </div>

      <section className="bg-gray-100 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <Services
              key={service.id}
              img={service.img}
              name={service.name}
              desc={service.desc}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-8 px-8">
        <Newsletter />
      </section>

      <Footer />
    </div>
  );
}

export default App;
