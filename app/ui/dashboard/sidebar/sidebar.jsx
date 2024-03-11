import React from 'react'
import menuItems from '../../../../constants/sidebar/menuItems'
import MenuLink from "@/constants/sidebar/menuLink/menuLink";
function Sidebar() {
    return (
        <div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span>{cat.title}</span>
                        {cat.list.map((item) => (
                            <div key={item.title}>
                                <MenuLink item={item} key={item.title} />
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
