import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function Product({ product }) {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(addToCart(product))}
        >
            Add to Cart
        </button>
    );
}

export default Product;
