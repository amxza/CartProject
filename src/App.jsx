import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navigation/Navbar';

function App() {
  const [userCart, setUserCart] = useState([]);

  const addToCart = (product, quantity) => {
    setUserCart(currentCart => {
      const itemIndex = currentCart.findIndex(item => item.product.id === product.id);

      if (itemIndex > -1) {
        // Item already exists, update its quantity
        const newCart = [...currentCart];
        newCart[itemIndex].quantity += quantity;
        return newCart;
      } else {
        // Item is new, add it to the cart
        return [...currentCart, { product, quantity }];
      }
    });
  };
  
  const clearCart = () => {
    setUserCart([]);
    console.log("Cart has been cleared!");
  };

  // This effect will run AFTER the state has updated, showing the correct cart contents
  useEffect(() => {
    console.log("Cart updated:", userCart);
  }, [userCart]);
    
  return (
    <div>
      <Navbar />
      <main>
        {/* Pass down the cart and the function to modify it */}
        <Outlet context={{ userCart, addToCart, clearCart }}/>
      </main>
    </div>
  );
}

export default App;