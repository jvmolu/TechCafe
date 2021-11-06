import React from 'react'

export default function MenuItem(props) {
    return (
        <div className="p-4 border-2">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button className="border-2 bg-gray-300 p-2 rounded-full">Add to cart</button>
        </div>
    )
}
