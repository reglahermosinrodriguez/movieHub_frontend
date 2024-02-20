import React, { useEffect, useState } from 'react'
import { Products } from '../../interfaces/products'



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
            <h1>{product.Name}</h1>
            <img src={product.image} alt={product.Name}/>
            <p>{product.price}</p>
            <p>{product.description}</p>

          </div>

        );


      })}
    </div>
    </>

  )
} 