import React from 'react'
import Image from "next/image";
import menuItems from '../../../../constants/sidebar/menuItems'
import MenuLink from "@/constants/sidebar/menuLink/menuLink";
import styles from "./sidebar.module.css"
import {MdLogout} from "react-icons/md";
function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={"/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{`{user.username}`}</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
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
            <button className={styles.logout}>
                <MdLogout/>
                Logout
            </button>
        </div>
    )
}

export default Sidebar
