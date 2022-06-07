import React from 'react';
import {Button, Card} from "react-bootstrap";
import Rating from "../Rating/Rating";
import './SingleProduct.css'
import {CartState} from "../../Context/Context";

const SingleProduct = ({product}) => {

    const {state: {cart}, dispatchers} = CartState()
    console.log(cart)
    const {name, image, ratings, prices, fastDelivery, inStock} = product;
    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' src={image} alt={name}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>$ {prices.split('.')[0]}</span>
                        <br/>
                        {
                            fastDelivery ? (
                                <>Fast Delivery</>
                            ) : (
                                <> 4 days delivery</>
                            )
                        }
                        <br/>
                        <Rating rating={ratings}/>
                    </Card.Subtitle>
                    {
                        cart.some(pd => pd.id === product.id) ? (
                            <Button onClick={() => {
                                dispatchers({
                                    type: 'REMOVE_FROM_CART',
                                    payload: product
                                })
                            }}
                                variant='danger'>
                                Remove from card
                            </Button>
                        ) : (
                            <Button onClick={() => {
                                dispatchers({
                                    type: 'ADD_TO_CART',
                                    payload: product
                                })
                            }}
                                disabled={!inStock}>{!inStock ? 'out of stock' : 'Add to Cart'}</Button>
                        )
                    }


                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;