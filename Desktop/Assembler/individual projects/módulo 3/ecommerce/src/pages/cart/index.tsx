import React from 'react'
import "./cart.css"
import { useCart } from '../../components/useCart'
import { Link } from 'react-router-dom';

interface CartItem {
    product: Product;
    quantity: number;
  }
  
  // Define el tipo Product si aún no está definido
  interface Product {
    id: string;
    Name: string;
    price: number;
    image: string;
    description: string;
  }

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
        <div className='cart-container'>
          <h2>Carrito</h2>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <>
              <div className='cart-items'>
                {cartItems.map((item, index) => (
                  <div className='cart-item' key={index}>
                    <img src={item.product.image} alt={item.product.Name} />
                    <div className='item-details'>
                      <h3>{item.product.Name}</h3>
                      <p>Precio: {item.product.price}</p>
                      <div className='quantity'>
                        <button onClick={() => handleDecreaseQuantity(item)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item)}>Remove</button>
                  </div>
                ))}
              </div>
              <div className='total'>
                <p>Total: ${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p>
              </div>
            </>
          )}
          <Link to='/checkout'>
            <button className='checkout-button'>Ir a pagar</button>
          </Link>
        </div>
      );
    };

export default CartPage;

