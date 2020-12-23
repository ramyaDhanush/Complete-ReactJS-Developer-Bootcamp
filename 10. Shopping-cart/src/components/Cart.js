import React from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";


const Cart = ({cartItem, removeItem, buyNow}) => {
  let amount = 0;
  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.productPrice)
  })
  return (
    <Container fluid>
      <h1 className="text-success">Your Cart </h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} alt="product"/>
              </Col>
              <Col>
                <div lassName="ml-2">
                  {item.productName} 
                </div>
                <span>price :- {item.productPrice}</span>
                <Button color="danger" onClick={()=> removeItem(item)}>Remove From Cart</Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If eveything is empty */}
      {
        cartItem.length >= 1 ? (
          <Card className="text-center mt-3">
            <CardHeader>
              Grand Total
            </CardHeader>
            <CardBody>
              Your amount for {cartItem.length} product is {amount}
            </CardBody>
            <CardFooter>
              <Button color="success" onClick={buyNow} >Buy Now</Button>
            </CardFooter>
          </Card>
        ):
        (<h1 className="text-warning">Cart is empty</h1>) 
      }
    </Container>

  )
}

export default Cart;