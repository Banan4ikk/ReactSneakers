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
        axios.get('https://6128cd040e3482001777b180.mockapi.io/Cart').then(
            res => {
                res.data.map(item => totalPriceFromServer += item.price)
                setPrice(totalPriceFromServer);
            }
        );
    }

    const onAdd = (obj) => {
        try {
            if (cartItems.find(cartItem => cartItem.id === obj.id)) {
                setCartItems(prev => prev.filter(item => item.id !== obj.id));
                console.log(obj);
                axios.delete('https://6128cd040e3482001777b180.mockapi.io/Cart/' + obj.id);
                getCartPrice();
            } else {
                axios.post('https://6128cd040e3482001777b180.mockapi.io/Cart', obj);
                console.log(obj);
                setCartItems(prev => [...prev, obj]);
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(favItem => favItem.id === obj.id)) {
                await axios.delete('https://6128cd040e3482001777b180.mockapi.io/Favorite/' + obj.id);
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const {data} = await axios.post('https://6128cd040e3482001777b180.mockapi.io/Favorite', obj);
                console.log(obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }

    const onRemoveItem = (obj) => {
        axios.delete('https://6128cd040e3482001777b180.mockapi.io/Cart/' + obj.id);
        setCartItems(prev => prev.filter(item => item.id !== obj.id));

        getCartPrice();
    }

    React.useEffect(() => {
        axios.get('https://6128cd040e3482001777b180.mockapi.io/items').then(res => {
            setItems(res.data)
            console.log(res.data);
        });
        axios.get('https://6128cd040e3482001777b180.mockapi.io/Cart').then(res => {
            setCartItems(res.data);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        });
        axios.get('https://6128cd040e3482001777b180.mockapi.io/Favorite').then(res => {
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
                totalPriceHeader={price}
            />

            <Route path="/" exact>
                <Home
                    searchValue={searchValue}
                    setSerchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    items={items}
                    price={price}
                    onAddToFavorite={onAddToFavorite}
                    onAdd={onAdd}
                    getCartPrice = {getCartPrice}
                />
            </Route>
            <Route path="/favorites" exact>
                <Favorites
                    price={price}
                    onAddToFavorite={onAddToFavorite}
                    onAdd={onAdd}
                    setPrice={setPrice}
                    items={favorites}
                />
            </Route>

        </div>
    );
}

export default App;
