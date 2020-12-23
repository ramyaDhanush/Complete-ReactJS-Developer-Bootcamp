import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BuyPage from './components/BuyPage';
import Cart from './components/Cart';
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isPresent = cartItem.findIndex((array) => array.id === item.id);
    if (isPresent !== -1) {
      toast('Already Added', {
        type: 'error',
      });
      return;
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
    <Container fluid>
      <ToastContainer/>
      <Row>
        <Col md="8">
          <BuyPage addToCart={addToCart}/>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
