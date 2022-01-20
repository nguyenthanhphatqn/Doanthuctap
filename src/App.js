import React from 'react';
import Login from './components/LoginForm';
import Login1 from './components/Login1';
import LoginError from './components/LoginError';
import ForgotPass from './components/ForgotPass';
import ResetPass from './components/ResetPass';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Menubar from './components/Menubar';
import DashboardCenter from './components/DashboardCenter';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/login1" element={<Login1/>} />
          <Route exact path="/loginerror" element={<LoginError/>} />
          <Route exact path="/forgot" element={<ForgotPass/>} />
          <Route exact path="/reset" element={<ResetPass/>} />
          <Route exact path="/dashboard" element={<><Menubar/> <Dashboard/></> } />
          {/* <Route exact path="/dashboard" element={<DashboardCenter/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
