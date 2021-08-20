function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerLeft">
                    <img src="/images/logo.svg"/>
                    <div className="headerInfo">
                        <h3>React sneakers</h3>
                        <p>Топовый магазин кросс</p>
                    </div>
                </div>
                <div>
                    <ul className="headerRight">
                        <li>
                            <svg/>
                            <span>1204 руб.</span>
                        </li>
                        <li>
                            <svg/>
                        </li>
                    </ul>
                </div>
            </header>
           <div className="content">
               <h1>Все кроссовки</h1>
               ....
           </div>
        </div>
    );
}

export default App;
