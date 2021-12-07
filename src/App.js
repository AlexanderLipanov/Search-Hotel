import React from 'react';
import LoginDashboard from './components/LoginComponents/LoginDashboard';
import Template from './components/TemplateComponents/Template';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
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
