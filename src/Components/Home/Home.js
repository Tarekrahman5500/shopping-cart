import React from 'react';
import {CartState} from "../../Context/Context";
import SingleProduct from "../SingleProduct/SingleProduct";
import Filters from "../Filters/Filters";
import '../css.css'

const Home = () => {

    // destruct the product from cart
    const {state: {products}, filter: {byStock, byFastDelivery, byRating, sort, searchQuery},} = CartState()
    // console.log(products)

    // send product according to filters
    const transformProducts = () => {
        let sortedProducts = products
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => (
                sort === 'lowToHigh' ? a.prices - b.prices : b.prices - a.prices
            ))
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((pd) => pd.inStock)
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((pd) => pd.fastDelivery)
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter((pd) => pd.ratings >= byRating)
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((pd) => pd.name.toLowerCase().includes(searchQuery))
        }
           return sortedProducts
    }
    return (
        <div className='home'>
            {/*filters bar*/}
            <Filters/>
            <div className='productContainer'>
                {   // show individual component
                    transformProducts().map((product, id) => {
                        return <SingleProduct product={product} key={id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Home;