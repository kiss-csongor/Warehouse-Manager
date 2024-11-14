// src/components/StockList.js
import React, { useState, useEffect } from 'react';
import { fetchStockItems } from './api';

const StockList = () => {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    const getStockItems = async () => {
      try {
        const response = await fetchStockItems();
        setStockItems(response.data);
      } catch (error) {
        console.error("Error fetching stock items:", error);
      }
    };
    
    getStockItems();
  }, []);

  return (
    <div>
      <h1>Stock List</h1>
      <ul>
        {stockItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
