import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StockList from './StockList';
import Navbar from './Component/Navbar/Navbar';
import Carousel from './Component/Carousel/Carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>
    <Carousel />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
