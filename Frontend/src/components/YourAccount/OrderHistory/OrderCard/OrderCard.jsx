import React from 'react'

const OrderCard = ({order}) => {
    return (
        <div className="flex flex-col border-2 m-4 p-4">
            <h4 className="border-2">{order.product}/{order.productID}</h4>
            <p className="border-2"><span className="font-bold">Order ID:</span> {order.id}</p>
            <p className="border-2"><span className="font-bold">Date:</span> {order.date}</p>
            <p className="border-2"><span className="font-bold">Total Amount:</span> {order.amount} {order.currency}</p>
            <p className="border-2"><span className="font-bold">Payement Method:</span> {order.paymentMethod}</p>
            <p className="border-2"><span className="font-bold">Quantity:</span> {order.quantity}</p>
            <p className="border-2"><span className="font-bold">status:</span> {order.status}</p>
        </div>
    )
}

export default OrderCard