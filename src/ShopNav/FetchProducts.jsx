import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import DisplayCartItems from "../CartNav/DisplayCartItems";
import Navbar from "../Navigation/Navbar";
import { Outlet, useOutletContext } from "react-router-dom";

const FetchProducts = () => {
    const {userCart, addToCart} = useOutletContext();
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchData = async () => {
            try {
                
                const response = await fetch(`https://fakestoreapi.com/products`);
                if (!response.ok) {
                    throw new Error("Item Not Found");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        FetchData();
    }, []);

    const HandleUpdate = (val) => {
        console.log("Value: ", val);
    }

    const addToCartLocal = (id, quantity) => {
       const clickedProduct = products.find(p => p.id === id);
       console.log("Added: ", clickedProduct);
       console.log("quantity: ", quantity);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>A netwrok error occured</p>;

    return (
        <div>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    imageURL={product.image}
                    name={product.title}
                    price={product.price}
                    onInputChange={HandleUpdate} 
                    handleClick={addToCartLocal}
                    />
            ))}
            
        </div>
    )
}

export default FetchProducts;