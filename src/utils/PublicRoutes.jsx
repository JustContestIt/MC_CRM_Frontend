import {Outlet, Navigate} from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import {useContext} from "react";
import {AuthContext} from "../context/auth";

const PublicRoutes = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        isAuth
            ? (
                <MyNavbar>
                    <Outlet/>
                </MyNavbar>
            )
            : <Navigate to={'/login'}/>
    );
};

export default PublicRoutes;