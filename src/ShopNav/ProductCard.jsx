import './Shop.css';
import { useState } from 'react';
function ProductCard({id, imageURL, name, price, onInputChange, handleClick}) {
    const [quantity, setQuantity] = useState(0);

    const handleInputChange = (e) => {
        console.log(e.target.value)
        onInputChange(e.target.value);
        setQuantity(parseInt(e.target.value));
    };
    const handleAddClick = () => {
    // Create an object with the data the Cart page will need later
    const itemData = { id, name, price, imageURL };
    handleClick(itemData, quantity);
    };

    return(
        <div className="itemCards">
            <img src={imageURL} alt={name} className="productImage"/>
            <h2>{name}</h2>
            <p>{price}</p>
            <input type="number" min={0} value={quantity} onChange={handleInputChange}/>
            <br />
            <button onClick={handleAddClick}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;