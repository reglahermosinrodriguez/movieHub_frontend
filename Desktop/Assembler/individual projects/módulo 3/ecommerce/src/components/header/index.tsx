import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useCart } from '../useCart';
 // Asegúrate de importar el contexto del carrito desde el archivo correcto

export default function Header() {
  const { cartItems } = useCart();

  return (
    <div> 
      <header>
        <h1 className="header">
          <Link to="/" className="home-link">
            <IoHome className='home-icon'/>
          </Link>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className='cart-icon'/>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </h1>
      </header>
    </div>
  );
}