import React from 'react'
import Login from '../pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import { ProductsProvider } from '../context/products';
import ProductsDetail from '../pages/product';
import Cart from '../pages/cart';
import { AuthProvider } from '../context/authContext';
import ProtectedRoutes from '../components/protectedroutes';
import { CartContextProvider } from '../context/cartContext';



const AppRouter: React.FC=() => { 


   return (
  <AuthProvider>
  <CartContextProvider>
  <BrowserRouter>
    <ProductsProvider>
    <Routes>
      <Route path='/' element={<Login onLoginSuccess={() => {}} />} />
      <Route path="/home" element={<ProtectedRoutes component={Home} />} />
      <Route path="/:id" element={<ProtectedRoutes component={ProductsDetail} />} />
      <Route path="/cart" element={<ProtectedRoutes component={Cart} />} />
    </Routes>
    </ProductsProvider>
    </BrowserRouter>
    </CartContextProvider>
    </AuthProvider>
   

  )
}

export default AppRouter