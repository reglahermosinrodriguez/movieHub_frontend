import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

type User = {
  email: string;
  password: string;
};

type Props = {
  onLoginSuccess: () => void;
};

async function getApi() {
  try {
    const data = await fetch('src/assets/Data/users.json');
    const JSONdata: User[] = await data.json();
    return JSONdata;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}

// async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void ) {
//   const user = users.find(user => user.email === email && user.password === password);
//   if (user) {
//     console.log('Inicio de sesión exitoso');
//     alert('¡Ha iniciado sesión!');
//     onLoginSuccess();
//   } else {
//     alert('Credenciales incorrectas. Inténtalo de nuevo.');
//   }
// }

async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void, navigate: any) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    navigate("/home");
    onLoginSuccess();
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getApi()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleGoClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClick = () => {
    loginUser(email, password, users, onLoginSuccess, navigate);
  };

  return (
    <>
      <h1 className='titleLogin'>Candle Shop</h1>
      <img className='imgLogin' src="src/assets/img/fondo-login.webp" alt="velas ardiendo" />
      <div className='containerLogin'>
        {showLoginForm ? (
          <>
            <div className='inputUser'>
              <input 
                id="email"
                type="email" 
                name="inputEmail"
                className='inputLogin'
                autoComplete='off'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='inputPassword'>
              <input 
                id="pass"
                type="password"
                name="inputPass" 
                className='inputLogin'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button onClick={handleLoginClick}>LOG IN</button>
          </>
        ) : (
          <button onClick={handleGoClick}>GO!</button>
        )}
      </div>
    </>
  );
};

export default Login;