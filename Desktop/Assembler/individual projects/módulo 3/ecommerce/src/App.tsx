import { useState } from 'react';
import './App.css'
import Login from './pages/login'
import AppRouter from './router';




function App() {
  

  return (
    <div className="App">
      <div className="login">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
