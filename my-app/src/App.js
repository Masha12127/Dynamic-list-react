import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

      const handleAddItem = () => {
          if (inputValue.trim() === '') return;
              setItems([...items, inputValue]);
                  setInputValue('');
                    };

                      return (
                          <div className="app-container">
                                <h1>Dynamic List Manager</h1>
                                      <div className="input-group">
                                              <input
                                                        type="text"
                                                                  placeholder="Enter an item"
                                                                            value={inputValue}
                                                                                      onChange={(e) => setInputValue(e.target.value)}
                                                                                              />
                                                                                                      <button onClick={handleAddItem}>Add Item</button>
                                                                                                            </div>
                                                                                                                  <div className="list-container">
                                                                                                                          <ul>
                                                                                                                                    {items.map((item, index) => (
                                                                                                                                                <li key={index}>• {item}</li>
                                                                                                                                                          ))}
                                                                                                                                                                  </ul>
                                                                                                                                                                        </div>
                                                                                                                                                                            </div>
                                                                                                                                                                              );
                                                                                                                                                                              }

                                                                                                                                                                              export default App;