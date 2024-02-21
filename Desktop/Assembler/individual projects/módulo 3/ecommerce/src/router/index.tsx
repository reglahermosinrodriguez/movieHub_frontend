import React from 'react'
import Login from '../pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import { ProductsProvider } from '../context/products';
import ProductsDetail from '../pages/product';



const AppRouter: React.FC=() => { 


   return (
  <BrowserRouter>
    <ProductsProvider>
    <Routes>
      <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:id" element={<ProductsDetail />} />
    </Routes>
    </ProductsProvider>
    </BrowserRouter>
   

  )
}

export default AppRouter