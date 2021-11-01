import React from "react";
import Nav from "./Nav/Nav";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <Nav></Nav>
      <div className={classes.img}>

      </div>
      <div className={classes.block}>
        <div className={classes.title}>Delicious food, Delivered to you</div>
        <br/>
        <div>
            Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home.<br/><br/> All our meals are
            cooked with high quality ingredients, just-in-time and of course by
            experienced chefs!
          </div>
      </div>
    </header>
  );
}
export default Header;
