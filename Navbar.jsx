import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">All Products</Link> |{" "}
      <Link to="/shopping-cart">Cart</Link> |{" "}
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}

export default Navbar;
