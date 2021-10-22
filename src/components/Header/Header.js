import React, { useEffect ,useContext} from "react";
import classes from "./Header.module.css";
import {FaHamburger} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';

import CartContext from "../../store/cart-context";
const Header = (props) => {
  useEffect(() => {
    const orderpageHandler = localStorage.getItem("orderpage");
    const aboutpageHandler = localStorage.getItem("aboutpage");
    const contactpageHandler = localStorage.getItem("contactpage");
    if (orderpageHandler === "1") {
      props.setOrderState(true);
    } else if (aboutpageHandler === "2") {
      props.setAboutState(true);
      props.setOrderState(false);
    } else if (contactpageHandler === "3") {
      props.setContactState(true);
      props.setOrderState(false);
    }
  });
  const orderHandler = () => {
    localStorage.setItem("orderpage", "1");
    props.setOrderState(true);
    props.setAboutState(false);
    props.setContactState(false);
    localStorage.removeItem("aboutpage");
    localStorage.removeItem("contactpage");
  };
  const aboutHandler = () => {
    localStorage.setItem("aboutpage", "2");
    props.setOrderState(false);
    props.setAboutState(true);
    props.setContactState(false);
    localStorage.removeItem("orderpage");
    localStorage.removeItem("contactpage");
  };
  const contactHandler = () => {
    localStorage.setItem("contactpage", "3");
    props.setOrderState(false);
    props.setAboutState(false);
    props.setContactState(true);
    localStorage.removeItem("aboutpage");
    localStorage.removeItem("orderpage");
  };
  const ctx=useContext(CartContext);
  const cartNumber=ctx.items.reduce((curNumber,item)=>{return curNumber+item.amount;},0)
  return (
    <header className={classes.navBar}>
      <div className={classes.move}>
        <FaHamburger className={classes.img}/>
        <span className={classes.title}> Burger</span>
      </div>
      <ul className={classes.list}>
        <li onClick={orderHandler}>order now</li>
        <li onClick={aboutHandler}>about us</li>
        <li onClick={contactHandler}>contact us</li>
        <button onClick={()=> props.onClickCart(true)} className={classes.btn}> <FaShoppingCart /> cart {cartNumber}</button>
      </ul>
    </header>
  );
};

export default Header;
