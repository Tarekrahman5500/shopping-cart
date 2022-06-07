import React, {createContext, useContext, useMemo, useReducer} from 'react';
import {faker} from "@faker-js/faker";
import {cartReducer} from "./Reducers";



// cart context

const Cart = createContext({})
// render statc data that change one time

faker.seed(99)

const Context = (props) => {
    const {children} = props
    // create fake data

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        prices: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])

    }))
// console.table(products)
// use reducer

    const [state, dispatchers] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const memoizedValue = useMemo(() => ({state, dispatchers}), [state, dispatchers])

    return (
        <Cart.Provider value={memoizedValue}>{children}</Cart.Provider>
    );
};

export const CartState = () => {

    return useContext(Cart)
}

export default Context;

