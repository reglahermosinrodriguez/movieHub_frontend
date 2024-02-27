import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch } from '../../context/authContext';
import './login.css'
import { User } from '../../interfaces/users';



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
    event.preventDefault(); 
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch({ type: 'LOGIN' });
      navigate('/home');
      onLoginSuccess();
    } else {
    
      if (!email || !password) {
        setErrorField(null);
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