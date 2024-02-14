import React, { useState } from 'react';
import './login.css'

type Props = {}

export default function Login({}: Props) {
  const [isHidden, setIsHidden] = useState(false);

  const handleLoginClick = () => {
    setIsHidden(true);
  }
  return (
  <>
   <div>
     <button className="go-button">Go!</button>
     {!isHidden &&<button className="login-button" onClick={handleLoginClick}>Log in</button>}   
    </div>
    <div>
    <input type="text" />
    <input type="password" />
    </div>

  </>
  )
}