import React, { useEffect, useState } from 'react'
import { Products } from '../../interfaces/products'
import { Link } from 'react-router-dom';



export default function Home() {
  const [productData, setProductData] = useState<Products[]>([]);

async function getProducts() {
  try {
    const data = await fetch('src/assets/data/products.json')
    const JSONdata = await data.json()
    setProductData(JSONdata);
  } catch (error) {
    console.log(error)
    
  }
}

useEffect(() => {
  getProducts();
}, [])


  return(
    <>
    <div>
      {productData.map((product) => {
        return(
          <div key={product.id}>
            <Link to={`/${product.id}`}><h1>{product.Name}</h1></Link>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.Name}/>

          </div>

        );


      })}
    </div>
    </>

  )
} 