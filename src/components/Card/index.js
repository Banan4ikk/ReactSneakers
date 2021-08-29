import styles from './Card.module.scss';
import React from 'react';

function Card({onPlus, img, name, price, setTotalPrice, oldPrice , onFavorite, favorite = false, id}) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorite);

    const onClickPlus = () => {
        onPlus({img, name, price, id});
        setIsAdded(!isAdded);
        setTotalPrice(oldPrice + price);
    }
    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavorite({img, name, price, id});
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={isFavorite ? "images/liked.svg" :"images/unliked.svg"} onClick={onClickFavorite}/>
            </div>
            <img width={133} height={112} src={img}/>
            <h5>{name}</h5>
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
