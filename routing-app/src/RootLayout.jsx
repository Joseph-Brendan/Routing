import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function RootLayout(){
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}