function App() {
    return (
        <div className="wrapper clear">
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
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="d-flex">

                    <div className="card">
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
