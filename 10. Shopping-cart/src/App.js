import React, { useState } from 'react';
// import  from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './components/BuyPage';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isPresent = cartItem.findIndex((array) => array.id === item.id);
    if (isPresent !== -1) {
      toast('Already Added', {
        type: 'error',
      });
    }
    setCartItem([...cartItem, item]);
  };
  const buyNow = () => {
    setCartItem([]);
    toast('Purchase Complete', {
      type: 'success',
    });
  };
  const removeItem = (item) => {
    setCartItem(cartItem.filter((currItem) => currItem.id !== item.id));
  };

  return(
    <div className="App">
      <BuyPage addToCart={addToCart}/>
    </div>
  );
}

export default App;
