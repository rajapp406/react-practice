import {NavLink} from 'react-router'
export const Header = () =>{
    return (
        <header>
            <nav>
               <NavLink to="/home" end>Home</NavLink>
               <NavLink to="/login" end>Login</NavLink>
               <NavLink to="/register" >Register</NavLink>
               <NavLink to="/dashboard" >Dashboard</NavLink>
               <NavLink to="/todo" >Dashboard</NavLink>

            </nav>
        </header>
    )
}