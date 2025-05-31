import { NavLink } from "react-router";

export function THeader() {
    return (
        <nav style={{ display: 'flex' }} className="nav-link">
            <ul className="nav-menu" style={{ display: 'flex', padding: '5px', listStyle: 'none' }}>
                <li className="nav-item"><NavLink to='dashboard'>Dashboard</NavLink></li>
                <li className="nav-item">
                    <NavLink to='todo'>Todo</NavLink>
                </li>
                <li className="nav-item"><NavLink to='aichat'>AI Chat</NavLink></li>
                <li className="nav-item"><NavLink to='budget'>Budget</NavLink></li>
                <li className="nav-item"><NavLink to='tictactoe'>Tic Toc Toe</NavLink></li>
                <li className="nav-item"><NavLink to='users'>Users</NavLink></li>

            </ul>
        </nav>
    )
}