import React from 'react';
import Login from './components/LoginForm';
import ForgotPass from './components/ForgotPass';
import ResetPass from './components/ResetPass';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forgot" element={<ForgotPass/>} />
          <Route exact path="/reset" element={<ResetPass/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
