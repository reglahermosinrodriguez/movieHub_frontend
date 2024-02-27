// import React, { useContext } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { productsContext } from '../../context/products'



// const ProductsDetail: React.FC=() => {
// const {id} = useParams<{id: string}>();
// const products = useContext(productsContext);
// const product = products.find(product => product.id === id);
// console.log(product);

// if (!product) {
//  return <div>Product not found</div>;
// }
 


//   return (
//     <>
//     <div>
//       <h2>{product.Name}</h2>
//       <p>{product.price}</p>
//       <p>{product.description}</p>
//       <img src={product.image} alt={product.Name}/>      
//     </div>
//     <Link to={`/cart`}>
//     <button>Buy now!</button>
//     </Link>
//     </>
//   );
// };

// export default ProductsDetail;

import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../components/useCart';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { productsContext } from '../../context/products';

// Interfaz para un solo producto
interface Product {
  id: string;
  Name: string;
  price: number; // Corregido a number para que coincida con la estructura de los productos
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useContext(productsContext);
  const { addToCart } = useCart();

  // Buscar el producto con el ID especificado en los parámetros de la URL
  const product = products.find((product) => product.id === id) as unknown as Product; // Añade la aserción de tipo para asegurarte de que product tenga el tipo correcto

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderizar los detalles del producto
  return (
    <>
    <Header />
      <div className='card-products'>
        <h2>{product.Name}</h2>
        <div className='card'>
          <img src={product.image} alt={product.Name} />
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
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