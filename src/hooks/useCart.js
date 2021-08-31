import React from "react";
import {AppContext} from "../App";

export const useCart = () => {

    const {setCartItems, cartItems} = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return {cartItems, setCartItems, totalPrice}
}