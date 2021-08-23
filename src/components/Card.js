function Card(){

    return(
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
    )
}

export default Card;