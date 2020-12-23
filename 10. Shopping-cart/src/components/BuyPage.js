import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { random, commerce } from 'faker';
import { Container, Col, Row } from 'reactstrap';
import './pexel.json';

const APIKEY = 'INSERT_YOUR_KEY_HERE';

const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1';
const localurl = 'https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/1NZ4';

const BuyPage = ({ addToCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    console.log("Entered");

    const {data} = await Axios.get(localurl);

    const {photos} = data;

    const allProduct = photos.map(photo =>({
      smallImage : photo.src.medium,
      tinyImage : photo.src.small,
      productName: random.word(),
      productPrice: commerce.price(),
      id:random.uuid()
    }))

    setProduct(allProduct);
  };
  

  useEffect(()=>{
    fetchPhotos();
  },[]);

  return(  
    <Container>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(_product => (
          <span key={_product.id}>{_product.productName}</span>
        ))}
      </Row>
    </Container>
  )

};

export default BuyPage;
