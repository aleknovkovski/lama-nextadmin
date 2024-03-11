import React from 'react'
import menuItems from '../../../../constants/sidebar/menuItems'
function Sidebar() {
    return (
        <div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span>{cat.title}</span>
                        {cat.list.map((item) => (
                            <div key={item.title}>
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
