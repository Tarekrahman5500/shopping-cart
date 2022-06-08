import React, {useEffect, useState} from 'react';
import {CartState} from "../../Context/Context";
import {Button, Col, ListGroup, Row, Form, Image} from "react-bootstrap";
import Rating from "../Rating/Rating";
import '../css.css'
import {AiFillDelete} from "react-icons/ai";
const Cart = () => {

    const {state: {cart}, dispatchers} = CartState();

    const [total, setTotal] = useState(0)

    useEffect(()=> {

        setTotal(cart.reduce((acc, item) =>  acc + Number(item.prices) * item.qty, 0))
    },[cart])
    return (
        <div className="home">
          <div className='productContainer'>
              <ListGroup>
                  {
                      cart.map((product) =>(

                          <ListGroup.Item key={product.id}>
                           <Row>
                               <Col md={2}>
                                  <Image src={product.image} alt={product.name} fluid rounded/>
                               </Col>
                               <Col md={2}>
                                   <span>{product.name}</span>
                               </Col>
                               <Col md={2}>
                                   <span>$: {product.prices}</span>
                               </Col>
                               <Col md={2}>
                                  <Rating rating={product.ratings} />
                               </Col>
                               <Col md={2}>
                                  <Form.Control
                                      as='select'
                                      value={product.qty}
                                      onChange={(e) => {
                                          dispatchers({
                                              type: 'CHANGE_CART_QTY',
                                              payload: {
                                                  id: product.id,
                                                  qty: e.target.value

                                              }
                                          })
                                      }}
                                  >
                                      {[...Array(product.inStock).keys()].map((qun) => (
                                          <option key={qun + 1}>{qun + 1}</option>
                                      ))}
                                  </Form.Control>
                               </Col>
                               <Col md={2}>
                                   <Button onClick={() => {
                                       dispatchers({
                                           type: 'REMOVE_FROM_CART',
                                           payload: product
                                       })
                                   }}
                                           variant='light'>
                                       Remove from card
                                       <AiFillDelete fontSize='20px'/>
                                   </Button>
                               </Col>
                           </Row>
                          </ListGroup.Item>
                      ))
                  }
              </ListGroup>
          </div>
              {/*sidebar*/}
              <div className='filters summary'>
                 <span className='title'>
                      Subtotal ({cart.length}) items
                 </span>
                  <span style={{fontWeight: 700, fontSize: 20}}>Total: ${total}</span>
                  <Button type="button" disabled={cart.length === 0}>Checkout</Button>
              </div>


        </div>
    );
};

export default Cart;