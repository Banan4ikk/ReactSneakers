import Card from './components/Card/'
import Cart from './components/Cart/'
import Header from './components/Header'
const sneakers = [
    {
        name: 'Кроссовки Nike Air Jordan Зеленый',
        price: 12999,
        img:'./images/sneakers/1.jpg'
    },
    {
        name: 'Кроссовки Nike Air Jordan Белый',
        price: 11900,
        img:'./images/sneakers/2.jpg'
    },
    {
        name: 'Кроссовки Nike Air Jordan Красный',
        price: 10990,
        img:'./images/sneakers/3.jpg'
    },
    {
        name: 'Кроссовки Nike Air Jordan Синий',
        price: 12390,
        img:'./images/sneakers/4.jpg'
    }
];

function App() {
    return (
        <div className="wrapper clear">
            {/*Корзина*/}
            <Cart/>
            {/*Корзина конец*/}
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img width={13} height={45} alt="Search" src="images/search.svg"/>
                        <input placeholder="Поиск"/>
                    </div>
                </div>
                {/*Карточки */}
                <div className="d-flex">
                    {
                        sneakers.map(item => (
                            <Card
                                title={item.name}
                                price={item.price}
                                img={item.img}
                                onClick={() => alert(item.name)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
