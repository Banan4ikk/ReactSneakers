import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";


function Card({
                  onPlus,
                  img,
                  name,
                  price,
                  onFavorite,
                  favorite = false,
                  id,
                  loading = false,
              }) {

    const [isFavorite, setIsFavorite] = React.useState(favorite);
    const {isItemAdded, updateCartPrice} = React.useContext(AppContext);


    const onClickPlus = () => {
        onPlus({img, name, price, id});
        updateCartPrice();
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavorite({img, name, price, id});
    }

    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader
                        speed={2}
                        width={155}
                        height={265}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="155" height="155"/>
                        <rect x="0" y="170" rx="5" ry="5" width="155" height="15"/>
                        <rect x="0" y="190" rx="5" ry="5" width="100" height="15"/>
                        <rect x="124" y="230" rx="5" ry="5" width="32" height="32"/>
                        <rect x="0" y="235" rx="5" ry="5" width="80" height="25"/>
                    </ContentLoader> :
                    <>
                        <div className={styles.favorite}>
                            <img src={isFavorite ? "images/liked.svg" : "images/unliked.svg"}
                                 onClick={onClickFavorite}/>
                        </div>
                        <img width='100%' height={135} src={img}/>
                        <h5>{name}</h5>

                        <div className="d-flex justify-between align-center">
                            <div className=" d-flex flex-column ">
                                <span>Цена:</span>
                                <b>{price} руб.</b>
                            </div>

                            <img onClick={onClickPlus} style={{cursor: "pointer"}}
                                 src={isItemAdded(id) ? "images/added.svg" : "images/plus.svg"}
                            />
                        </div>
                    </>
            }
        </div>
    )
}

export default Card;
