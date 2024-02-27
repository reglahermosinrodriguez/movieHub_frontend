import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../../interfaces/products';
import { CartItem } from '../../interfaces/cartitems';
import { CartContextType } from '../../interfaces/cartContextType';


const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  removeItem: () => { }, 
  setCartItems: function (_items: CartItem[]): void {
    throw new Error('Function not implemented.');
  }
});


export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

 
  const increaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };


  const removeItem = (item: CartItem) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};