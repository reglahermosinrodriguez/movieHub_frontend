import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../components/useCart';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { productsContext } from '../../context/products';
import './product.css'
import { Product } from '../../interfaces/products';


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useContext(productsContext);
  const { addToCart } = useCart();


  const product = products.find((product) => product.id === id) as unknown as Product; // Añade la aserción de tipo para asegurarte de que product tenga el tipo correcto

  if (!product) {
    return <div>Product not found</div>;
  }

  
  return (
    <>
    <Header />
      <div className='card-products'>
        <h2>{product.Name}</h2>
        <div className='card'>
          <img src={product.image} alt={product.Name} />
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      </div>
      <Link to={`/cart`}>
        <button onClick={() => addToCart(product)}>Buy!</button>
      </Link>
      <Footer />
    </>
  );
};

export default ProductDetail;