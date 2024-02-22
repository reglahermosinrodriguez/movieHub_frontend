import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productsContext } from '../../context/products'



const ProductsDetail: React.FC=() => {
const {id} = useParams<{id: string}>();
const products = useContext(productsContext);
const product = products.find(product => product.id === id);
console.log(product);

if (!product) {
 return <div>Product not found</div>;
}
 


  return (
    <div>
      <h2>{product.Name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.Name}/>      
    </div>
  );
};

export default ProductsDetail;