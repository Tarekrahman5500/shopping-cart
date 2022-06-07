import React from 'react';
import {CartState} from "../../Context/Context";
import SingleProduct from "../SingleProduct/SingleProduct";
import './Home.css'
import Filters from "../Filters/Filters";
const Home = () => {

    // destruct the product from cart
    const {state:{products}} = CartState()
    console.log(products)
    return (
        <div className='home'>
           {/*filters bar*/}
           <Filters/>
            <div className='productContainer'>
                {   // show individual component
                    products.map((product, id) => {
                    return <SingleProduct product = {product} key={id}/>
                    })
                }
            </div>
        </div>
    );
};

export default Home;