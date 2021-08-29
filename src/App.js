import React from 'react'
import Card from './components/Card/'
import Cart from './components/Cart/'
import Header from './components/Header'
import axios from "axios";

function App() {
    let totalPriceFromServer = 0;
    const [items, setItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('');

    const onAdd = (obj) => {
        axios.post('http://localhost:3002/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }
    const onAddToFavorite = (obj) => {
        axios.post('http://localhost:3001/favorite', obj);
        setFavorites(prev => [...prev, obj]);
    }

    const onRemoveItem = (obj) => {
        axios.delete('http://localhost:3002/cart/' + obj.id);
        setCartItems(prev => prev.filter(item => item.id !== obj.id));
        setPrice(price - obj.price)
    }

    React.useEffect(() => {
        axios.get('http://localhost:3000/sneakers').then(res => {
            setItems(res.data)
        })
        axios.get('http://localhost:3002/cart').then(res => {
            setCartItems(res.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            res.data.map(item => totalPriceFromServer += item.price)
            setPrice(totalPriceFromServer);
        })
    }, []);
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Cart
                onClickClose={() => {
                    setCartOpened(false)
                }}
                items={cartItems}
                onRemove={onRemoveItem}
            />}
            <Header
                onClickCart={() => {
                    setCartOpened(true);
                }}
                totalPriceHeader={price}
            />
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
        </div>
    );
}

export default App;
