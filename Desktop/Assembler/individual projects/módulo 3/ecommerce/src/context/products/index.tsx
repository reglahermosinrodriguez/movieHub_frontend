import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { Products } from '../../interfaces/products';

interface ProductsProviderProps {
    children: ReactNode;
}


export const productsContext = createContext<Products[]>([]);
export const ProductsProvider = ( { children }: ProductsProviderProps) => {
const [product, setProduct] = useState<Products[]>([]);

useEffect(() =>  {
fetchProductsData()
}, []);


async function fetchProductsData() {

    try {
        const data = await fetch('src/assets/data/products.json')
        const JSONdata = await data.json();
        setProduct(JSONdata)
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
    
    <productsContext.Provider value={product}>
        { children }
    </productsContext.Provider>

    </>
  )

}