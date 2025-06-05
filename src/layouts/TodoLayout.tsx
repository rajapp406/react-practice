import React from "react"
import './sidebar.scss'
import { THeader } from "./Header"
import { TSideBar } from "./Sidebar"
import { TFooter } from "./Footer"
import { TMain } from "./Main"

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



