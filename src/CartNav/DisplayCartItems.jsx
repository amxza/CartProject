function DisplayCartItems({ items }) {
    // Handle the case where items might not be passed correctly, preventing errors
    if (!items || items.length === 0) {
        return (
            <div>
                <h2>My Cart Items</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    // Calculate total items and price for a summary
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    return (
        <div>
            <h2>My Cart Items ({totalItems})</h2>
            <ul>
                {items.map(cartItem => (
                    <li key={cartItem.product.id}>
                        <img src={cartItem.product.image} alt={cartItem.product.title} style={{width: "50px", marginRight: "10px"}} />
                        {cartItem.product.title} - ${cartItem.product.price.toFixed(2)}
                        <br />
                        Quantity: {cartItem.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default DisplayCartItems;