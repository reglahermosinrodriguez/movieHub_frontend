import { CartItem } from "./cartitems";
import { Product } from "./products";

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (item: CartItem) => void;
    decreaseQuantity: (item: CartItem) => void;
    removeItem: (item: CartItem) => void;
    setCartItems: (items: CartItem[]) => void;
  }