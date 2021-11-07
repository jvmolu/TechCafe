import React from 'react'
import SubMenu from './SubMenu/SubMenu'

export default function Menu() {
    return (
        <div className="p-4 ml-5">
            <h2>Menu</h2>
            <SubMenu title="Drinks" />
            <SubMenu title="Parathas" />
            <SubMenu title="Sandwiches" />
        </div>
    )
}
