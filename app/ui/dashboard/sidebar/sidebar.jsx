import React from 'react'
import menuItems from '../../../../constants/sidebar/menuItems'
import MenuLink from "@/constants/sidebar/menuLink/menuLink";
import styles from "./sidebar.module.css"
function Sidebar() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <div key={item.title}>
                                <MenuLink item={item} key={item.title}/>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
