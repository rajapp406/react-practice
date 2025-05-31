import React from "react"
import './sidebar.css'
import { THeader } from "./Header"
import { TSideBar } from "./Sidebar"
import { TFooter } from "./Footer"
import { TMain } from "./Main"
import { RightSidebar } from "./RightSidebar"

export function TodoLayout() {
    return (
        <>
            <THeader />
            <div style={{ display: 'flex', height: '90vh' }}>
                <TSideBar />
                <TMain />
            </div>
            <TFooter />
        </>
    )
}



