import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

import './Filters.css'
import Rating from "../Rating/Rating";
const Filters = () => {

    const [rate, setRate] = useState(3)
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
                    />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Descending'
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Include out of stock'
                    name='group1'
                    type='checkbox'
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Fast Delivery only'
                    name='group1'
                    type='checkbox'
                    id={`inline-4`}
                />
            </span>
            <span>
                <label style={{paddingRight: 10}}>Rating:</label>
                <Rating rating={rate} onClick={(i) => setRate(i + 1) } style={{cursor: 'pointer'}} />
            </span>
            <Button varient='light'>Clear Filters</Button>
        </div>
    );
};

export default Filters;