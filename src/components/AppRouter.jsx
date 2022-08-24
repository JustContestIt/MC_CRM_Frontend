import React, { useContext } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import {ProfileContext} from "../context/profileContext";
import {Context} from "../index";

const AppRouter = () => {

    const profile = useContext(ProfileContext)
    const {store} = useContext(Context)

    if (!store.isAuth) {
        return (
            <div className="App">
                <Routes>
                    <Route path={'/login'} element={<Login profile={profile} />} />
                    <Route path={'*'} element={<Navigate to={'/login'} />} />
                </Routes>
            </div>
        )
    }

    return (
        <div className="App">
            <Routes>
                <Route
                    path={'/'}
                    element={<Main profile={profile}/>}
                />
                <Route
                    path={'/profile'}
                    element={<Profile profile={profile}/>}
                />
            </Routes>
        </div>
    );
};

export default AppRouter;