import './Shop.css';
import { useState } from 'react';

function ProductCard({id, imageURL, name, price, handleClick}) {
    // Default quantity to 1, as a user will likely add at least one item.
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        // Ensure quantity is at least 1
        const value = parseInt(e.target.value, 10);
        setQuantity(value >= 1 ? value : 1);
    };

    const handleAddClick = () => {
        // Pass the item's unique ID and the selected quantity
        handleClick(id, quantity);
        // Optional: Reset quantity to 1 after adding to cart for a better user experience
        setQuantity(1);
    };

    return(
        <div className="itemCards">
            <img src={imageURL} alt={name} className="productImage"/>
            <h2>{name}</h2>
            <p>${price}</p>
            {/* Using a controlled input for quantity */}
            <input 
              type="number" 
              min={1} 
              value={quantity} 
              onChange={handleQuantityChange}
            />
            <br />
            <button onClick={handleAddClick}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;