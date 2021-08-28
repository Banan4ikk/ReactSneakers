import React from "react";

function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src="/images/logo.png"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p>Топовый магазин кросс</p>
                </div>
            </div>
            <div>
                <ul className="d-flex">
                    <li className="mr-30 cu-p" onClick={props.onClickCart}>
                        <img style={{cursor: "pointer"}} width={18} height={18} src="images/cart.svg"/>
                        <span> {props.totalPriceHeader} руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="images/user.svg"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;