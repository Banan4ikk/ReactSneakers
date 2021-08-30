import React from "react";
import Card from "../components/Card";

function Favorites({items, price, onAddToFavorite, onAdd, setPrice}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.map(item => (
                        <Card
                            key = {item.id}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAdd(obj)}
                            favorite={true}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites;