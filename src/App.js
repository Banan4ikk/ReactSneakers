import React from 'react'
import {Route} from 'react-router-dom'
import Cart from './components/Cart/'
import Header from './components/Header'
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import axios from "axios";

function App() {

    const [items, setItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('');

    const getCartPrice = () => {
        let totalPriceFromServer = 0;
        axios.get('http://localhost:3002/cart').then(
            res => {
                res.data.map(item => totalPriceFromServer += item.price)
                setPrice(totalPriceFromServer);
                console.log(totalPriceFromServer);
            }
        );
    }

    const onAdd = (obj) => {
        try {
            if (cartItems.find(cartItem => cartItem.id === obj.id)) {
                setCartItems(prev => prev.filter(item => item.id !== obj.id));
                axios.delete('http://localhost:3002/cart/' + obj.id);
                getCartPrice();
            } else {
                axios.post('http://localhost:3002/cart', obj);
                setCartItems(prev => [...prev, obj]);
                getCartPrice();
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(favItem => favItem.id === obj.id)) {
                await axios.delete('http://localhost:3003/favorite/' + obj.id);
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const {data} = await axios.post('http://localhost:3003/favorite', obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }

    const onRemoveItem = (obj) => {
        axios.delete('http://localhost:3002/cart/' + obj.id);
        setCartItems(prev => prev.filter(item => item.id !== obj.id));
        setPrice(price - obj.price);
    }

    React.useEffect(() => {
        axios.get('http://localhost:3001/sneakers').then(res => {
            setItems(res.data)
            getCartPrice();
        });
        axios.get('http://localhost:3002/cart').then(res => {
            setCartItems(res.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        });
        axios.get('http://localhost:3003/favorite').then(res => {
            setFavorites(res.data);
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
                price={price}
            />

            <Route path="/" exact>
                <Home
                    searchValue={searchValue}
                    setSerchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    items={items}
                    onAddToFavorite={onAddToFavorite}
                    onAdd={onAdd}
                    getCartPrice={getCartPrice}
                />
            </Route>
            <Route path="/favorites" exact>
                <Favorites
                    onAddToFavorite={onAddToFavorite}
                    onAdd={onAdd}
                    items={favorites}
                />
            </Route>

        </div>
    );
}

export default App;
