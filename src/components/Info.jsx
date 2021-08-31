import styles from "./Cart/Cart.module.scss";
import React from "react";
import {AppContext} from "../App";

const Info = ({image, title, description}) => {

    const {setCartOpened} = React.useContext(AppContext)

    return (
        <div className={styles.cartEmpty}>
            <img className="mb-20" src={image} style={{width: 120}}/>
            <h2> {title}</h2>
            <p className="opacity-6"> {description}</p>
            <button className={styles.greenButton} onClick={() => setCartOpened(false)}>
                <img src="./images/arrow.svg" alt="arrow"/>
                Вернуться назад
            </button>
        </div>
    )
}

export default Info