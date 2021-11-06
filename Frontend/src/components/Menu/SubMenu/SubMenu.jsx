import React from 'react'
import MenuCategory from '../MenuCategory/MenuCategory'
import MenuItem from '../MenuItem/MenuItem'

export default function SubMenu(props) {
    
    let items = [
        {name: "TestItem1", price: "1.00"},
        {name: "TestItem2", price: "2.00"},
        {name: "TestItem3", price: "3.00"}
    ]

    return (
        <div>
            <MenuCategory title={props.title} />
            <div className="flex mb-4">
                {items.map((item, index) => {
                    return <MenuItem key={index} name={item.name} price={item.price} />
                })}
            </div>
        </div>
    )
}
