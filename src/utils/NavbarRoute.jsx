import {Outlet} from "react-router-dom";
import MyNavbar from "../components/MyNavbar";

const NavbarRoute = () => {

    return (
        <MyNavbar>
            <Outlet/>
        </MyNavbar>
    );
};

export default NavbarRoute;