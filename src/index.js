import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Log-ind'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/Blaffer-react'>
    <Routes>
      <Route path="/" element={ <App /> }/>
      <Route path="/log-ind" element={ <Login /> }/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();