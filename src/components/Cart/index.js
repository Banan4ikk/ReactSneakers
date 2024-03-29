import React from "react";
import axios from "axios";
import {AppContext} from "../../App";
import styles from './Cart.module.scss'
import Info from "../Info";
import {useCart} from "../../hooks/useCart";


function Cart({onClickClose, items = [], onRemove, opened}) {
    const {isLoading, setIsLoading} = React.useContext(AppContext);

    const [isCompleted, setIsCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(1);
    const { cartItems, setCartItems, totalPrice } = useCart()

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('http://localhost:3001/order', {items: cartItems})
            setOrderId(data.id);
            cartItems.map(item => axios.delete(`http://localhost:3001/cart/${item.id}`))
            setIsCompleted(true);
            setCartItems([]);
        } catch (error) {
            alert("Ошибка при создании заказа")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={opened? styles.overlay : styles.overlayHidden} style={{position: "fixed"}}>
            <div className={styles.cart}>
                <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className={styles.deleteItem}
                                                                            src="images/deleteCart.svg"
                                                                            onClick={onClickClose}/></h2>
                {
                    items.length > 0 ?
                        <div className="d-flex flex-column flex">
                            <div className={styles.Items} style={{flex: 1}}>
                                {
                                    items.map(item => (
                                            <div className={styles.cartItem}>
                                                <img className="mr-20" width={133} height={112} src={item.img}/>
                                                <div className="mr-20">
                                                    <p className="sneakers-info mb-5">{item.name}</p>
                                                    <b>{item.price} Руб.</b>
                                                </div>
                                                <img className={styles.deleteItem} onClick={() => onRemove(item)}
                                                     src="images/deleteCart.svg"/>
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
                                        <b>{Math.round(totalPrice * 0.05)} руб.</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} className={styles.greenButton}
                                        onClick={onClickOrder}> Оформить заказ <img
                                    src={"images/arrow.svg"}/>
                                </button>
                            </div>
                        </div>
                        :
                        <Info
                            title={isCompleted ? "Заказ оформлен" : "Корзина пустая"}
                            description={
                                isCompleted ? "Ваш заказ #" + orderId + " скоро будет передан курьерской доставке"
                                    : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                            }
                            image={isCompleted ? "./images/ordered.jpg" : "./images/empty-cart.jpg"}
                        />
                }
            </div>
        </div>
    )
}

export default Cart;

