import { Link } from "react-router";
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                <li><button><Link to="/">Home</Link></button></li>
                <li><button><Link to="/shop">Shop</Link></button></li>
                <li><button><Link to="/cart">Cart</Link></button></li>
            </ul>
            <div className="line"></div>
      </nav>
    </div>
    )
}

export default Navbar