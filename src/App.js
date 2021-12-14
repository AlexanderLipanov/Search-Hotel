import React from 'react';
import LoginDashboard from './components/LoginComponents/LoginDashboard';
import Template from './components/TemplateComponents/Template';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import './App.css';

function App() {

  const password = useSelector((state) => state.loginReducer.passwordInputCookie);
  const email = useSelector((state) => state.loginReducer.emailInputCookie);
    
  Cookies.set('password', password);
  Cookies.set('email', email);

  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<LoginDashboard />} />
          <Route path='/template' element={<Template />} />
        </Routes>
    </div>
  );
}

export default App;
