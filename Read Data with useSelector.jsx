import { useSelector } from "react-redux";

function Cart() {

    const items = useSelector(state => state.cart.cartItems);

    return (
        <>
            <h1>Shopping Cart</h1>

            {items.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </>
    );
}

export default Cart;
