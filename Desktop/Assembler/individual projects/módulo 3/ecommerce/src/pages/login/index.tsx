// import React, { useEffect, useState } from 'react';
// import './login.css'
// import { useNavigate } from 'react-router-dom';

// type User = {
//   email: string;
//   password: string;
// };

// type Props = {
//   onLoginSuccess: () => void;
// };

// async function getApi() {
//   try {
//     const data = await fetch('src/assets/Data/users.json');
//     const JSONdata: User[] = await data.json();
//     return JSONdata;
//   } catch (error) {
//     throw new Error('Error fetching user data');
//   }
// }

// // async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void ) {
// //   const user = users.find(user => user.email === email && user.password === password);
// //   if (user) {
// //     console.log('Inicio de sesión exitoso');
// //     alert('¡Ha iniciado sesión!');
// //     onLoginSuccess();
// //   } else {
// //     alert('Credenciales incorrectas. Inténtalo de nuevo.');
// //   }
// // }

// async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void, navigate: any) {
//   const user = users.find(user => user.email === email && user.password === password);
//   if (user) {
//     navigate("/home");
//     onLoginSuccess();
//   } else {
//     alert('Credenciales incorrectas. Inténtalo de nuevo.');
//   }
// }

// const Login: React.FC<Props> = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState<User[]>([]);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getApi()
//       .then((data) => setUsers(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleGoClick = () => {
//     setShowLoginForm(true);
//   };

//   const handleLoginClick = () => {
//     loginUser(email, password, users, onLoginSuccess, navigate);
//   };

//   return (
//     <>
//       <h1 className='titleLogin'>Candle Shop</h1>
     
//       <div className='containerLogin'>
//         {showLoginForm ? (
//           <>
//             <div className='inputUser'>
//               <input 
//                 id="email"
//                 type="email" 
//                 name="inputEmail"
//                 className='inputLogin'
//                 autoComplete='off'
//                 placeholder='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='inputPassword'>
//               <input 
//                 id="pass"
//                 type="password"
//                 name="inputPass" 
//                 className='inputLogin'
//                 placeholder='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button onClick={handleLoginClick}>LOG IN</button>
//           </>
//         ) : (
//           <button onClick={handleGoClick}>GO!</button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Login;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthDispatch } from '../../context/authContext';

// type User = {
//   email: string;
//   password: string;
// };

// type Props = {
//   onLoginSuccess: () => void;
// };

// const Login: React.FC<Props> = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState<User[]>([]);
//   const [loginError, setLoginError] = useState(false);
//   const [errorField, setErrorField] = useState<string | null>(null);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const navigate = useNavigate();
//   const authDispatch = useAuthDispatch();

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('src/assets/Data/users.json');
//         const usersData: User[] = await response.json();
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     }

//     fetchUsers();
//   }, []);

//   const handleGoClick = () => {
//     setShowLoginForm(true);
//   };

//   const handleLoginClick = () => {
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       authDispatch({ type: 'LOGIN' });
//       navigate("/home");
//     } else {
//       alert('Credenciales incorrectas. Inténtalo de nuevo.');
//     }
//   };

//   return (
//     <>
//       <h1 className='titleLogin'>Candle Shop</h1>
//       <div className='containerLogin'>
//         {showLoginForm ? (
//           <>
//             <div className='inputUser'>
//               <input 
//                 id="email"
//                 type="email" 
//                 name="inputEmail"
//                 className='inputLogin'
//                 autoComplete='off'
//                 placeholder='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='inputPassword'>
//               <input 
//                 id="pass"
//                 type="password"
//                 name="inputPass" 
//                 className='inputLogin'
//                 placeholder='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button onClick={handleLoginClick}>LOG IN</button>
//           </>
//         ) : (
//           <button onClick={handleGoClick}>GO!</button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../context/authContext';

type User = {
  email: string;
  password: string;
};

type Props = {
  onLoginSuccess: () => void;
};

async function fetchUsers() {
  try {
    const data = await fetch('src/assets/Data/users.json');
    const JSONdata: User[] = await data.json();
    return JSONdata;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loginError, setLoginError] = useState(false);
  const [errorField, setErrorField] = useState<string | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleGoClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClick = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload on form submission
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch({ type: 'LOGIN' });
      navigate('/home');
      onLoginSuccess();
    } else {
      // Determine which field caused the login error
      if (!email || !password) {
        setErrorField(null); // Clear error field if fields are empty
      } else if (!email.includes('@')) {
        setErrorField('email');
      } else {
        setErrorField('password');
      }
      setLoginError(true);
    }
  };

  return (
    <>
      <h1 className='titleLogin'>Candle Shop</h1>
      <div className='containerLogin'>
        {showLoginForm ? (
          <form onSubmit={handleLoginClick} >
          
            <div className='inputUser'>
              <input 
                id="email"
                type="email" 
                name="inputEmail"
                className={`inputLogin ${errorField === 'email' ? 'input-error' : ''}`}
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
                className={`inputLogin ${errorField === 'password' ? 'input-error' : ''}`}
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

    {loginError && <p className="error-message">Incorrect email or password</p>}
            
    <button type="submit">LOG IN</button>
    </form>
          
        ) : (
          <button onClick={handleGoClick}>GO!</button>
        )}
      </div>
    </>
  );
};

export default Login;