import React, { useState } from 'react'
import OrderCard from './OrderCard/OrderCard'

const OrderHistory = ({orders}) => {
    
    let [isShowFull, setIsShowFull] = useState(false);
    
    const clickHandler = () => {
        setIsShowFull((isShowFull)=>(!isShowFull))
    }

    return (
        <div className="flex flex-col border-2 m-4 p-4" id="order-history">
            <h3 className="border-2">Order History</h3>

            {orders.length === 0 && <p>You have no orders</p>}

            {!isShowFull && orders.length > 2 && <OrderCard key={orders[0].id} order={orders[0]}/>}
            
            {!isShowFull && orders.length > 2 && <OrderCard key={orders[1].id} order={orders[1]}/>}

            {!isShowFull && orders.length > 2 && <button onClick={clickHandler} className="border-2 bg-gray-300 p-2 rounded-full mb-1 w-64">View More v</button>}

            {(isShowFull || orders.length <= 2) && orders.map(order => <OrderCard key={order.id} order={order}/>)}

            {isShowFull && orders.length > 2 && <button onClick={clickHandler} className="border-2 bg-gray-300 p-2 rounded-full mb-1 w-64">View Less ^</button>}

        </div>
    )
}

export default OrderHistory
