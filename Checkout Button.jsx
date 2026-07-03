import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

function CheckoutButton() {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(checkout())}>
            Checkout
        </button>
    );
}
