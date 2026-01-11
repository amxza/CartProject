import { Link } from "react-router";

const Cart = () => {
    return (
        <div>
            <h1>This is your Shopping Cart!</h1>
            <p>If you're not done shopping, you go go back to the shop screen</p>
            <Link to="/shop">Back to shop</Link>
        </div>
    )
}

export default Cart;