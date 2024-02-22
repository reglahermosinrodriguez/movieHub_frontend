import React, { useEffect, useState } from 'react'
import { Products } from '../../interfaces/products'
import { Link } from 'react-router-dom';
import './home.css'
import Header from '../../components/header';



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
    <Header />
    <div className="card-product">
      {productData.map((product) => {
        return(
          <div className='card'key={product.id}>
            <Link to={`/${product.id}`}><h1 className='name-product'>{product.Name}</h1></Link>
            {/* <p>{product.price}</p>
            <p>{product.description}</p> */}
            <img src={product.image} alt={product.Name}/>

          </div>
    

        );


      })}
    </div>

    <button className='button-load-more'>Load more</button>
    </>

  )
} 