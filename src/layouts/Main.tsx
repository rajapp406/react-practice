import { Outlet } from "react-router";

export function TMain() {
    return (
        <>
            <div className="main-container">
                <Outlet />
            </div>

        </>
    )
}