import React from 'react'
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";

function Layout({children}) {
    return (
        <div>
            <div>
            <Sidebar/>
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout
