import React from 'react';
import {Badge, Button, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import {CartState} from "../../Context/Context";
import {AiFillDelete} from "react-icons/ai";
import './Header.css'
const Header = () => {

    // get card sate data
    const {state:{cart}, dispatchers} = CartState()
    return (
        // design the header the form official website
        <Navbar bg="dark" variant="dark" style={{height: '80'}}>
          <Container>
              <Navbar.Brand>
                  <Link className="linkStyle" to="/">shopping cart</Link>
              </Navbar.Brand>
              <Navbar.Text className="search">
                  <FormControl style={{width: '500'}} placeholder="Search" className="m-auto"/>
              </Navbar.Text>
              <Nav>
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <FaShoppingCart color="white" fontSize='25px'/>
                         {/* total number of product show*/}
                         <Badge className="bg-danger shadow-1-strong m-1">{cart.length}</Badge>
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{width: '370'}}>
                          {
                              cart.length > 0 ? (
                                  <>
                                      {
                                          cart.map((product) => (
                                              <span className='cartItem' key={product.id}>
                                                  <img
                                                      src={product.image}
                                                      className='cartItemImg'
                                                      alt={product.name} />
                                                  <div className='cartItemDetail'>
                                                      <span>{product.name}</span>
                                                       <span>$ {product.prices.split('.')[0]}</span>
                                                  </div>
                                                {/*remove from card icon*/}
                                                <AiFillDelete
                                                    fontSize='20px'
                                                    style={{cursor: 'pointer'}}
                                                    onClick={() => {
                                                        dispatchers({
                                                            type: 'REMOVE_FROM_CART',
                                                            payload: product
                                                        })
                                                    }}
                                                   />
                                              </span>
                                          ))
                                      }
                                      {/*go to card*/}
                                      <Link to='/cart'>
                                          <Button style={{width: '95%', margin: '0 10px'}}>Go to Cart</Button>

                                      </Link>
                                  </>
                              ):( <span style={{padding: '10'}}>Cart is Empty!</span>)
                          }

                      </Dropdown.Menu>
                  </Dropdown>
              </Nav>
          </Container>

        </Navbar>
    );
};

export default Header;