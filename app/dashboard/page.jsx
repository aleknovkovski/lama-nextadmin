import React from 'react'
import styles from "@/app/ui/dashboard/dashboard.module.css"
import Card from "@/app/ui/dashboard/card/card";

function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                Transactions
                Chart
            </div>
            <div className={styles.side}>
                Rightbar
            </div>
        </div>
    );
}

export default Dashboard
