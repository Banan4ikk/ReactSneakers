import styles from './Cart.module.scss'


function Cart({onClickClose, items = []}) {
    let totalPrice = 0;

    items.map(item => {
        totalPrice += item.price;
    });

    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className={styles.deleteItem}
                                                                            src="images/deleteCart.svg"
                                                                            onClick={onClickClose}/></h2>
                <div className={styles.Items}>
                    {
                        items.map(item => (
                                <div className={styles.cartItem}>
                                    <img className="mr-20" width={133} height={112} src={item.img}/>
                                    <div className="mr-20">
                                        <p className="sneakers-info mb-5">{item.title}</p>
                                        <b>{item.price} Руб.</b>
                                    </div>
                                    <img className={styles.deleteItem} src="images/deleteCart.svg"/>
                                </div>
                            )
                        )
                    }
                </div>

                <div className={styles.cardTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>{totalPrice / 100 * 5} руб.</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>Оформить заказ <img src={"images/arrow.svg"}/></button>
                </div>
            </div>
        </div>
    )
}

export default Cart;

