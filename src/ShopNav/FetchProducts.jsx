import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const FetchProducts = () => {
    // The addToCart function is created in App.jsx
    const { addToCart } = useOutletContext();
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

    const addToCartHandler = (id, quantity) => {
       const productToAdd = products.find(p => p.id === id);
       if (productToAdd) {
            addToCart(productToAdd, quantity);
       }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error occurred</p>;

    return (
        <div>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    imageURL={product.image}
                    name={product.title}
                    price={product.price}
                    handleClick={addToCartHandler}
                    />
            ))}
        </div>
    );
}

export default FetchProducts;