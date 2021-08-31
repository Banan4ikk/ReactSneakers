import React from "react";
import Card from "../components/Card";
import axios from "axios";
import {AppContext} from "../App";

function Orders() {
    const {onAddToFavorite, onAdd} = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get("http://localhost:3001/order");
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (e) {
                alert("Ошибка при запросе заказов");
                console.error(e);
            }
        })()
    }, []);
    return (

        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    (isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <Card
                            key={index}
                            loading={isLoading}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;