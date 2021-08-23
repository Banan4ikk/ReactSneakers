function App() {
    return (
        <div className="wrapper clear">
            {/*Корзина*/}
            <div style={{display: 'none'}} className="overlay">
                <div className="drawer">
                    <h2 className={"mb-30 d-flex justify-between"}>Корзина <img className="deleteItem" src="images/deleteCart.svg"/></h2>
                    <div className={"Items"}>
                        <div className="cartItem d-flex align-center mt-20 mb-20">
                            <img className="mr-20" width={133} height={112} src="images/sneakers/1.jpg"/>
                            <div className="mr-20">
                                <p className="sneakers-info mb-5">Кроссовки Nike Air Jordan Зеленый</p>
                                <b>12 999 Руб.</b>
                            </div>
                            <img className="deleteItem" src="images/deleteCart.svg"/>
                        </div>
                        <div className="cartItem d-flex align-center mt-20 mb-20">
                            <img className="mr-20" width={133} height={112} src="images/sneakers/1.jpg"/>
                            <div className="mr-20">
                                <p className="sneakers-info mb-5">Кроссовки Nike Air Jordan Зеленый</p>
                                <b>12 999 Руб.</b>
                            </div>
                            <img className="deleteItem" src="images/deleteCart.svg"/>
                        </div>
                    </div>
                    <div className={"cardTotalBlock"}>
                        <ul>
                            <li>
                                <span>Итого</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>

                        </ul>
                        <button className={"greenButton"}>Оформить заказ <img src={"images/arrow.svg"}/></button>
                    </div>
                </div>
            </div>
            {/*Корзина конец*/}
            <header className="d-flex justify-between align-center p-40">
                <div className="headerLeft d-flex align-center">
                    <img width={40} height={40} src="/images/logo.png"/>
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React sneakers</h3>
                        <p>Топовый магазин кросс</p>
                    </div>
                </div>
                <div>
                    <ul className="d-flex">
                        <li className="mr-30">
                            <img width={18} height={18} src="images/cart.svg"/>
                            <span>1204 руб.</span>
                        </li>
                        <li>
                            <img width={18} height={18} src="images/user.svg"/>
                        </li>
                    </ul>
                </div>
            </header>
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

                    <div className="card">
                        <div className="favorite">
                            <img src="images/unliked-heart.svg"/>
                        </div>
                        <img width={133} height={112} src="images/sneakers/1.jpg"/>
                        <h5>Кроссовки Nike Air Jordan Зеленый</h5>
                        <div className="d-flex justify-between align-center">
                            <div className=" d-flex flex-column ">
                                <span>Цена:</span>
                                <b>12 999 Руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="images/plus.svg"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="images/sneakers/2.jpg"/>
                        <h5>Кроссовки Nike Air Jordan Голубой</h5>
                        <div className="d-flex justify-between align-center">
                            <div className=" d-flex flex-column ">
                                <span>Цена:</span>
                                <b>12 999 Руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="images/plus.svg"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="images/sneakers/3.jpg"/>
                        <h5>Кроссовки Nike Air Jordan мультицвет</h5>
                        <div className="d-flex justify-between align-center">
                            <div className=" d-flex flex-column ">
                                <span>Цена:</span>
                                <b>12 999 Руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="images/plus.svg"/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src="images/sneakers/4.jpg"/>
                        <h5>Кроссовки Nike Air Jordan черно - белый</h5>
                        <div className="d-flex justify-between align-center">
                            <div className=" d-flex flex-column ">
                                <span>Цена:</span>
                                <b>12 999 Руб.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="images/plus.svg"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
