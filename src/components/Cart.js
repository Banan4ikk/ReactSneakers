import CartComponent from "./CartComponent";

function Cart() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className="deleteItem"
                                                                            src="images/deleteCart.svg"/></h2>
                <div className={"Items"}>
                    <CartComponent/>
                    <CartComponent/>
                </div>
                <div className={"cardTotalBlock"}>
                    <ul>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className={"greenButton"}>Оформить заказ <img src={"images/arrow.svg"}/></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;