import React from 'react'

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export const CartItem = ({product, addToCart}) => {
  return (
    <Card className="mt-2 mb-1"> 
      <CardImg top height="250px" width="100%" src={product.smallImage}/>
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">Price : Rs. {product.productPrice}</CardText>
        <Button color="success" onClick={()=> addToCart(product)}>Buy Now</Button>
      </CardBody>
    </Card>
  )
}
