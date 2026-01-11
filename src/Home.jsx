import { Link } from "react-router";

function Home () {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/shop">Link to Shop</Link>
        </div>
    );
}

export default Home;