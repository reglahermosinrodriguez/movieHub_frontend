import React, { createContext, useContext, useState, ReactNode } from 'react';

// Interfaz para el producto en el carrito
interface CartItem {
  product: Product;
  quantity: number;
}

// Interfaz para el producto
interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

// Interfaz para el contexto del carrito
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (item: CartItem) => void;
  decreaseQuantity: (item: CartItem) => void;
  removeItem: (item: CartItem) => void; // Agregamos la función removeItem
  setCartItems: (items: CartItem[]) => void;
}

// Crear el contexto del carrito
const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  removeItem: () => { }, // Agregamos la función removeItem con una implementación vacía
  setCartItems: function (_items: CartItem[]): void {
    throw new Error('Function not implemented.');
  }
});

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

// Componente proveedor del contexto del carrito
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Función para agregar un producto al carrito
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

  // Función para aumentar la cantidad de un producto en el carrito
  const increaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  // Función para disminuir la cantidad de un producto en el carrito
  const decreaseQuantity = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };

  // Función para eliminar un producto del carrito
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