import Card from "../components/Card";
import React from "react";
import {AppContext} from "../App";
function Home({
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  items,
                  isLoading,
                  isRemove
              }) {

    const {onAddToFavorite, onAdd} = React.useContext(AppContext)

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        return (isLoading ? [...Array(8)] : filteredItems)
            .map((item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAdd(obj)}
                    {...item}
                    loading={isLoading}
                    isRemove={isRemove}
                />
            ))
    }

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
                    renderItems()
                }
            </div>
        </div>
    )
}

export default Home;