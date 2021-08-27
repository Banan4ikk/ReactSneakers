import styles from './Cart.module.scss'


function Cart(props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className={styles.deleteItem}
                                                                            src="images/deleteCart.svg" onClick={props.onClickClose}/></h2>
                <div className={styles.Items}>
                    <div className={styles.cartItem}>
                        <img className="mr-20" width={133} height={112} src="images/sneakers/1.jpg"/>
                        <div className="mr-20">
                            <p className="sneakers-info mb-5">Кроссовки Nike Air Jordan Зеленый</p>
                            <b>12 999 Руб.</b>
                        </div>
                        <img className={styles.deleteItem} src="images/deleteCart.svg"/>
                    </div>
                    <div className={styles.cartItem}>
                        <img className="mr-20" width={133} height={112} src="images/sneakers/1.jpg"/>
                        <div className="mr-20">
                            <p className="sneakers-info mb-5">Кроссовки Nike Air Jordan Зеленый</p>
                            <b>12 999 Руб.</b>
                        </div>
                        <img className={styles.deleteItem} src="images/deleteCart.svg"/>
                    </div>
                </div>
                <div className={styles.cardTotalBlock}>
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
                    <button className={styles.greenButton}>Оформить заказ <img src={"images/arrow.svg"}/></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;