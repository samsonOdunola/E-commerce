import React from 'react';
import { Routes,Route } from 'react-router-dom';
import MainPage from './MainPage';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import { useState } from 'react';




function App() {
  const [checkLogin, setCheckLogin]=useState(false)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage checkLogin={checkLogin}/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>

      </Routes>
      
      
      
    </div>
  );
}

export default App;
