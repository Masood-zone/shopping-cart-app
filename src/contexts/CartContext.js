import React, { createContext, useState } from "react";
import productData from "../data/data.json";
import { toast } from "react-toastify";

export const CartContext = createContext();
function CartProvider({ children }) {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);

  const onAddToCart = (item) => {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      toast.error("Item has already been added!");
    } else {
      setCart((prevItem) => [...prevItem, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, onAddToCart, products }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
