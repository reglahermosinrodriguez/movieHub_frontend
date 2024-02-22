import React from 'react'
import "./header.css"
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";




export default function Header() {
  return (
    <div> 
      <header>
          <h1 className="header"><IoHome className='home-icon'/><FaShoppingCart className='cart-icon'/></h1>
      </header>
      </div>
  )
}