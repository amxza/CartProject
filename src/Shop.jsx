import {Link} from "react-router"
const Shop = () => {
    return (
        <div>
            <h1>This is the Shop!</h1>
            <p> TO go back to Home, Click the link below</p>
                <Link to="/">Back to Home</Link>
            <p>If you're done shopping, head to the cart</p>
                <Link to="/cart">Cart</Link>
        </div>
    );
}

export default Shop;