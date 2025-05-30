import { Footer } from "./Footer"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <main>
            {children}
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;