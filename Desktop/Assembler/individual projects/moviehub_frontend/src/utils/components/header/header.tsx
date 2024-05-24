import Link from "next/link";
import "./header.css";
import { IoHome } from "react-icons/io5";
import { FaHeart, FaPowerOff } from "react-icons/fa";

export default function Header() {

return (
    
     <div className="header-title">  
    <h1>Movies App <Link href="/movies" className="home-link">
        <IoHome className="home-icon"/>
    </Link>
        <FaHeart className="heart-icon"/>
        <Link href="/api/auth/logout">
          <FaPowerOff className="off-icon"/>
          </Link>
           
        </h1>
    
    </div>
 
 
)


}