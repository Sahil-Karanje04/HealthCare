import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './User.css'
import CartProduct from '../../Components/Cart-Product/CartProduct';

const User = () => {
    const { user } = useAuth0();
  return (
    <div className='User-info-container'>
        <div className="name"><hr /><h1 style={{textAlign:"center"}}>{user.name}</h1><hr /> </div>
        <div className="user-cart">
            <div className="order-products">
                <h3 style={{textAlign: "center"}}>Selected Products</h3>
                <div className="selected-products">
                    <CartProduct/>
                </div>
            </div>

            <div className="oreder-review">
                <h3>orderreview</h3>
            </div>
        </div>
    </div>
  )
}

export default User