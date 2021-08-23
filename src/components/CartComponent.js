function CartComponent(){
    return(
        <div className="cartItem d-flex align-center mt-20 mb-20">
            <img className="mr-20" width={133} height={112} src="images/sneakers/1.jpg"/>
            <div className="mr-20">
                <p className="sneakers-info mb-5">Кроссовки Nike Air Jordan Зеленый</p>
                <b>12 999 Руб.</b>
            </div>
            <img className="deleteItem" src="images/deleteCart.svg"/>
        </div>
    )
}
export default CartComponent;