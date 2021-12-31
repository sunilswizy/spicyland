import React from "react";
import {ReactComponent as Cart} from '../../assests/cart.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    return (
        <div className="cart-icon">  
            <Cart  className="icon"/><span className="qty">1</span>
         Cart
        </div>

    )
}

export default CartIcon