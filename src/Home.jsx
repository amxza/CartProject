import { Link } from "react-router";
import './HomeNav/Home.css'

function Home () {
    return (
        <div>
            <div className="homeContainer">
                <h1>Welcome to the Tech Shop!</h1>
                <p>Where we have the best deals on items or something like that</p>
                <p>Click below to start shopping now!</p>
                <button id="shopBtn"><Link to="/shop">Link to Shop</Link></button>
            </div>
        </div>
    );
}

export default Home;