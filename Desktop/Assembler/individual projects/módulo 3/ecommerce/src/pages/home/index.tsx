// import React, { useEffect, useState } from 'react'
// import { Products } from '../../interfaces/products'
// import { Link } from 'react-router-dom';
// import './home.css'
// import Header from '../../components/header';
// import Footer from '../../components/footer';



// export default function Home() {
//   const [productData, setProductData] = useState<Products[]>([]);

// async function getProducts() {
//   try {
//     const data = await fetch('src/assets/data/products.json')
//     const JSONdata = await data.json()
//     setProductData(JSONdata);
//   } catch (error) {
//     console.log(error)
    
//   }
// }

// useEffect(() => {
//   getProducts();
// }, [])


//   return(
//     <>
//     <Header />
//     <div className="card-product">
//       {productData.map((product) => {
//         return(
//           <div className='card'key={product.id}>
//             <Link to={`/${product.id}`}><h1 className='name-product'>{product.Name}</h1></Link>
//             {/* <p>{product.price}</p>
//             <p>{product.description}</p> */}
//             <img src={product.image} alt={product.Name}/>

//           </div>
    

//         );


//       })}
//     </div>
  
//     <button className='button-load-more'>Load more</button>
//     <Footer />
//     </>

//   )
// } 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../../components/header';
import { useCart } from '../../components/useCart';
import Footer from '../../components/footer';

interface Product {
  id: string;
  Name: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loadedAllProducts, setLoadedAllProducts] = useState(false);
  const { addToCart, cartItems, removeItem } = useCart();

  useEffect(() => {
    getProductsApi();
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
      setVisibleProducts(productData.slice(0, 2));
    }
  }, [productData]);

  async function getProductsApi() {
    try {
      const data = await fetch('src/assets/Data/products.json');
      const JSONdata = await data.json();
      setProductData(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoadMore = () => {
    if (productData.length > visibleProducts.length) {
      const remainingProducts = productData.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts([...visibleProducts, ...remainingProducts]);

      if (visibleProducts.length + 4 >= productData.length) {
        setLoadedAllProducts(true);
      }
    } else {
      setLoadedAllProducts(true);
    }
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.product.id === productId);
  };

  // FunciÃ³n para remover un producto del carrito
  const handleRemoveFromCart = (product: Product) => {
    const itemToRemove = cartItems.find((item) => item.product.id === product.id);
    if (itemToRemove) {
      removeItem(itemToRemove);
    }
  };

  return (
    <>
      <Header />
      <h2 className='title'>WATCHES SEASON 2024</h2>
      <div className='card-product'>
        {visibleProducts.map((product) => (
          <div className='card' key={product.id}>
            <Link to={`/${product.id}`}>
              <h2>{product.Name}</h2>
            </Link>
            <img src={product.image} alt={product.Name} />
            {isInCart(product.id) ? (
              <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
            ) : (
              <button onClick={() => addToCart(product)}>Buy</button>
            )}
          </div>
        ))}
      </div>
      {!loadedAllProducts && (
        <button className='button-load-more' onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </>
  );
}
