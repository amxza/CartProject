import { useOutletContext, Link } from "react-router-dom";
import DisplayCartItems from "./CartNav/DisplayCartItems";

const Cart = () => {
    // Get userCart and the new clearCart function from the context
    const { userCart, clearCart } = useOutletContext();

    const handlePayNow = () => {
        // You can add payment logic here in the future
        alert("Thank you for your purchase!");
        clearCart();
    };
    
    return (
        <div>
            <h1>This is your Shopping Cart!</h1>
            
            <DisplayCartItems items={userCart} />

            {/* Only show the button if the cart is not empty */}
            {userCart && userCart.length > 0 && (
                <button 
                    onClick={handlePayNow} 
                    style={{marginTop: '20px', padding: '10px', fontSize: '1em'}}
                >
                    Pay Now
                </button>
            )}

            <p>If you're not done shopping, you can go back to the shop screen.</p>
            <Link to="/shop">Back to shop</Link>
        </div>
    );
}

export default Cart;