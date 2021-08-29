import styles from './Card.module.scss';
import React from 'react';

function Card({onPlus, img, title, price, setTotalPrice, oldPrice , onFavorite}) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({img, title, price});
        setIsAdded(!isAdded);
        setTotalPrice(oldPrice + price);
    }
    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavorite({img, title, price});
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={isFavorite ? "images/liked.svg" :"images/unliked.svg"} onClick={onClickFavorite}/>
            </div>
            <img width={133} height={112} src={img}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className=" d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={onClickPlus} style={{cursor: "pointer"}}
                     src={isAdded ? "images/added.svg" : "images/plus.svg"}
                />
            </div>
        </div>
    )
}

export default Card;
