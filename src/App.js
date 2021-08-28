import React from 'react'
import Card from './components/Card/'
import Cart from './components/Cart/'
import Header from './components/Header'
import axios from "axios";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const onAdd = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    React.useEffect(() => {
        axios.get('https://6128cd040e3482001777b180.mockapi.io/items').then(res => {
            setItems(res.data);
        })
    }, []);
    return (
        <div className="wrapper clear">
            {cartOpened && <Cart
                onClickClose={() => {
                    setCartOpened(false)
                }}
                items={cartItems}
            />}
            <Header
                onClickCart={() => {
                    setCartOpened(true);
                }}
                totalPriceHeader={price}
            />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img width={13} height={45} alt="Search" src="images/search.svg"/>
                        <input placeholder="Поиск"/>
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
                                onClickFavorite={() => alert("Добавлено в любимое")}
                                onPlus={(obj) => onAdd(obj)}
                                setTotalPrice={(price) => {
                                    setPrice(price)
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
