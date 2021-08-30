import styles from './Cart.module.scss'
import React from "react";
import {AppContext} from "../../App";


function Cart({onClickClose, items = [], onRemove}) {
    const {price} = React.useContext(AppContext);

    return (
        <div className={styles.overlay} style={{position: "fixed"}}>
            <div className={styles.cart}>
                <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className={styles.deleteItem}
                                                                            src="images/deleteCart.svg"
                                                                            onClick={onClickClose}/></h2>
                {
                    items.length > 0 ?
                        <div className="RELATIVE">
                            <div className={styles.Items} style={{flex: 1}}>
                                {
                                    items.map(item => (
                                            <div className={styles.cartItem}>
                                                <img className="mr-20" width={133} height={112} src={item.img}/>
                                                <div className="mr-20">
                                                    <p className="sneakers-info mb-5">{item.name}</p>
                                                    <b>{item.price} Руб.</b>
                                                </div>
                                                <img className={styles.deleteItem} onClick={() => onRemove(item)} src="images/deleteCart.svg"/>
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
                                        <b>{price} руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%</span>
                                        <div></div>
                                        <b>{Math.round(price / 100 * 5)} руб.</b>
                                    </li>
                                </ul>
                                <button className={styles.greenButton}>Оформить заказ <img src={"images/arrow.svg"}/>
                                </button>
                            </div>
                        </div>
                        :
                        <div className={styles.cartEmpty}>
                            <img className="mb-20" src="./images/empty-cart.jpg" style={{width: 120, height: 120}}/>
                            <h2> Коризна пустая</h2>
                            <p className="opacity-6"> Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
                            <button className={styles.greenButton} onClick={onClickClose}>
                                <img src="./images/arrow.svg" alt="arrow"/>
                                Вернуться назад
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart;

