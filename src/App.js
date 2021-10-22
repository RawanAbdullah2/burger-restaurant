import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Order from "./components/Order/Order";
import "./index.css";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [orderState, setOrderState] = useState(true);
  const [aboutState, setAboutState] = useState(false);
  const [contactState, setContactState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const visiableHandler = (e) => {
    setIsVisible(e);
  };
  return (
    <CartProvider>
      {isVisible && <Cart onClickCart={visiableHandler} />}
      <Header
        setOrderState={setOrderState}
        setAboutState={setAboutState}
        setContactState={setContactState}
        onClickCart={visiableHandler}
      />
      <main className="main">
        {orderState && <Order />}
        {aboutState && <About />}
        {contactState && <Contact />}
      </main>
    </CartProvider>
  );
}

export default App;
