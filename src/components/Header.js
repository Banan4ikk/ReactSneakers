import React from "react";
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

function Header(props) {
    const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="headerLeft d-flex align-center">
                    <img width={40} height={40} src="/images/logo.png"/>
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React sneakers</h3>
                        <p>Топовый магазин кросс</p>
                    </div>
                </div>
            </Link>
            <div>
                <ul className="d-flex">
                    <li className="mr-30 cu-p" onClick={props.onClickCart}>
                        <img style={{cursor: "pointer"}} width={18} height={18} src="images/cart.svg"/>
                        <span> {totalPrice} руб.</span>
                    </li>
                    <li className="mr-20 cu-p">
                        <Link to="/favorites">
                            <img width={18} height={18} src="images/favorite.svg"/>
                        </Link>
                    </li>
                    <li>
                        <Link style={{cursor: "pointer"}} to="/orders">
                            <img width={18} height={18} src="images/user.svg"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;