
import Cart from "../Cart/Cart";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={classes.logo}>ReactMeals</div>
      <Cart/>
    </nav>
  );
}

export default Nav;
