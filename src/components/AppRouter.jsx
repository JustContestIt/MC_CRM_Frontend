import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import {StoreContext} from "../index";
import NavbarRoute from "../utils/NavbarRoute";
import NotFound from "../pages/NotFound";

const AppRouter = () => {

    const {store} = useContext(StoreContext)

    if (!store.isAuth) {
        return (
            <Routes>
                <Route path={'/login'} element={<Login/>} />
                <Route
                    path={'*'}
                    element={<Navigate to={'/login'} />}
                />
            </Routes>
        )
    }

    else return (
        <Routes>
            <Route element={<NavbarRoute/>}>
                <Route
                    path={'/'}
                    element={<Main/>}
                />
                <Route
                    path={'/profile'}
                    element={<Profile/>}
                />
                <Route
                    path={'/login'}
                    element={<Navigate to={'/'}/> }
                />
                <Route
                    path={'*'}
                    element={<NotFound />}
                />
            </Route>
        </Routes>
    );
};

export default AppRouter;