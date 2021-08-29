import Card from "../components/Card";
import React from "react";

function Home({searchValue, setSearchValue, onChangeSearchInput, items, price, onAddToFavorite, onAdd, setPrice}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <h1>{searchValue ? 'Поиск по запросу: "' + searchValue + '"' : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img width={13} height={45} alt="Search" src="images/search.svg"/>
                    {searchValue &&
                    <img onClick={() => setSearchValue('')} className="cu-p clear" src="images/deleteCart.svg"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск"/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.map(item => (
                        <Card
                            title={item.name}
                            price={item.price}
                            img={item.img}
                            oldPrice={price}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAdd(obj)}
                            setTotalPrice={(price) => setPrice(price)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;