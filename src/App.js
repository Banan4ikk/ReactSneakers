import Card from './components/Card'
import Cart from './components/Cart'
import Header from './components/Header'

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
                {/*Карточки*/}
                <div className="d-flex">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
