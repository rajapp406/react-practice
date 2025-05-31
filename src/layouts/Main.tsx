import { Outlet } from "react-router";
import { RightSidebar } from "./RightSidebar";

export function TMain() {
    return (
        <>
            <div className="main-container">
                <div className="content">
                    <Outlet />
                </div>
                <RightSidebar />
            </div>

        </>
    )
}