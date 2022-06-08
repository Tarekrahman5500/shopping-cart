import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Rating from "../Rating/Rating";
import '../css.css'
import {CartState} from "../../Context/Context";
const Filters = () => {



    const {filter:{  byStock, byFastDelivery, byRating, sort}, FilterDispatchers} = CartState()
    console.log(byStock, byFastDelivery, byRating, sort)
    return (
        <div className='filters'>
            <span className='title'>Filter products</span>
            <span>
                <Form.Check
                       inline
                       label='Ascending'
                       name='group1'
                       type='radio'
                       id={`inline-1`}
                       onChange={() =>
                        FilterDispatchers({
                            type: 'SORT_BY-PRICES',
                            payload: 'lowToHigh'
                        })
                       }
                       checked={sort === 'lowToHigh'}
                    />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Descending'
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                    onChange={() =>
                        FilterDispatchers({
                            type: 'SORT_BY-PRICES',
                            payload: 'highToLow'
                        })
                    }
                    checked={sort === 'highToLow'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Include out of stock'
                    name='group1'
                    type='checkbox'
                    id={`inline-3`}
                    onChange={() =>
                        FilterDispatchers({
                            type: 'FILTER_BY-STOCK',
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Fast Delivery only'
                    name='group1'
                    type='checkbox'
                    id={`inline-4`}
                    onChange={() =>
                        FilterDispatchers({
                            type: 'FILTER_BY-DELIVERY',
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{paddingRight: 10}}>Rating:</label>
                <Rating rating={byRating} onClick={(i) =>
                    FilterDispatchers({
                        type: 'FILTER_BY-RATING',
                        payload: i + 1
                    })
                } style={{cursor: 'pointer'}} />
            </span>
            <Button varient='light' onClick={() =>
                FilterDispatchers({
                    type: 'CLEAR_FILTER'
                })
            }>Clear Filters</Button>
        </div>
    );
};

export default Filters;