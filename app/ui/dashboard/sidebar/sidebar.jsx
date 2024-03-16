import React from 'react'
import Image from "next/image";
import menuItems from '../../../../constants/sidebar/menuItems'
import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menuLink";
import styles from "./sidebar.module.css"
import {MdLogout} from "react-icons/md";
import {auth} from "@/app/auth";
async function Sidebar() {
    const { user } = await auth();
    console.log({user})
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>{user.isAdmin ? "Administrator" : "User"}</span>
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
