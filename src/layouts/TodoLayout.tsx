import React from "react"
import { NavLink, Outlet } from "react-router"

export function TodoLayout() {
    return (
        <>
            <THeader />
            <TSideBar />
            <TMain />
            <TFooter />
        </>
    )
}

function THeader() {
    return (
        <nav style={{display:'flex'}}>
            <ul className="nav-menu" style={{display: 'flex', padding: '5px', listStyle: 'none'}}>
                <li className="nav-item">
                    <NavLink to='todo'>Todo</NavLink>
                </li>
                <li className="nav-item"><NavLink to='ai-chat'>AI Chat</NavLink></li>
                <li className="nav-item"><NavLink to='budget'>bDudget</NavLink></li>
                <li className="nav-item"><NavLink to='tictoctoe'>Tic Toc Toe</NavLink></li>
            </ul>
        </nav>
    )
}

function TSideBar() {
    return (
        <>
            <h1>SideBar!</h1>
        </>
    )
}

function TFooter() {
    return (
        <>
            <h1>Footer!</h1>
        </>
    )
}
function TMain() {
    return (
        <>
            <Outlet />
            sdasd
        </>
    )
}