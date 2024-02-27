import React from 'react'
import "./cart.css"
import { useCart } from '../../components/useCart'
import Footer from '../../components/footer';
import Header from '../../components/header';
import { CartItem } from '../../interfaces/cartitems';
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";

const CartPage = () => {
    const {cartItems, increaseQuantity, decreaseQuantity, setCartItems} = useCart()

    const removeItem = (itemToRemove: CartItem) => {
        const updateItems = cartItems.filter(item => item !== itemToRemove);
        setCartItems(updateItems)
    }

    const handleIncreaseQuantity = (item: CartItem) => {
        increaseQuantity(item)
    }

    const handleDecreaseQuantity = (item: CartItem) => {
        decreaseQuantity(item)
    }

    return (
        <>
       <Header />
       <div className='cart-container'>
          <h2 className="shopping-cart">Shopping cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className='cart-items'>
                {cartItems.map((item, index) => (
                  <div className='cart-item' key={index}>
                    <img src={item.product.image} alt={item.product.Name} />
                    <div className='item-details'>
                      <h3>{item.product.Name}</h3>
                      <p className="item-price">Precio: {item.product.price}</p>
                      <span className="item-quantity">Quantity: {item.quantity}</span>
                      <div className='quantity'>
                        
                        <button onClick={() => handleDecreaseQuantity(item)}>−</button>
                        <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item)}><HiMiniArchiveBoxXMark /></button>
                  </div>
                ))}
              </div>
              <div className='total'>
                <p className='total-price'>Total: ${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p>
              </div>
            </>
          )}
          
            <button className='checkout-button'>Pay!</button>
         
        </div>
        <Footer />
        </>
      );
    };

export default CartPage;

