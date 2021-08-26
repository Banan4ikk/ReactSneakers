import styles from './Card.module.scss';
import React from 'react';

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false)
    
    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="images/unliked-heart.svg" onClick={props.onClickFavorite}/>
            </div>
            <img width={133} height={112} src={props.img}/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className=" d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img onClick={onClickPlus} style={{cursor: "pointer"}} src={isAdded ? "images/added.svg" : "images/plus.svg"}/>
            </div>
        </div>
    )
}

export default Card;
