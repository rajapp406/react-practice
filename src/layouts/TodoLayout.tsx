import { left } from "@popperjs/core"
import React from "react"
import { NavLink, Outlet } from "react-router"
import './sidebar.css'
import { THeader } from "./Header"
import { TSideBar } from "./Sidebar"
import { TFooter } from "./Footer"
import { TMain } from "./Main"

export function TodoLayout() {
    return (
        <>
            <THeader />
            <div style={{ display: 'flex' }}>
                <TSideBar />
                <TMain />
            </div>
            <TFooter />
        </>
    )
}



