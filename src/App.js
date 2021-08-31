import React from 'react'
import {Route} from 'react-router-dom'
import Cart from './components/Cart/'
import Header from './components/Header'
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import axios from "axios";

export const AppContext = React.createContext({});

function App() {

    const [items, setItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isRemovePressed, setIsRemovePressed] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [price, setPrice] = React.useState(0);

    const updateCartPrice = () => {
        let totalPriceFromServer = 0;
        axios.get('http://localhost:3001/cart').then(
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
                axios.delete('http://localhost:3001/cart/' + obj.id);
                updateCartPrice();
            } else {
                axios.post('http://localhost:3001/cart', obj);
                setCartItems(prev => [...prev, obj]);
                updateCartPrice();
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(favItem => favItem.id === obj.id)) {
                await axios.delete('http://localhost:3001/favorite/' + obj.id);
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const {data} = await axios.post('http://localhost:3001/favorite', obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в избранное. Ошибка " + error);
        }
    }

    const onRemoveItem = (obj) => {
        axios.delete('http://localhost:3001/cart/' + obj.id);
        setCartItems(prev => prev.filter(item => item.id !== obj.id));
        setPrice(price - obj.price);
        setIsRemovePressed(true);
    }

    React.useEffect(() => {
        async function getData() {
            const cartResponse = await axios.get('http://localhost:3001/cart')
            const favoriteResponse = await axios.get('http://localhost:3001/favorite')
            const itemsResponse = await axios.get('http://localhost:3001/sneakers')

            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoriteResponse.data);
            setItems(itemsResponse.data);
            updateCartPrice()
        }

        getData();
    }, []);
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => obj.id === id)
    }

    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            price,
            isItemAdded,
            setCartOpened,
            setCartItems,
            updateCartPrice,
            isLoading,
            setIsLoading,
            setPrice
        }}>
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
                        cartItems={cartItems}
                        onChangeSearchInput={onChangeSearchInput}
                        items={items}
                        onAddToFavorite={onAddToFavorite}
                        onAdd={onAdd}
                        isLoading={isLoading}
                        isRemove={isRemovePressed}
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
        </AppContext.Provider>
    );
}

export default App;
