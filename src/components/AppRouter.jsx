import React, { useContext, useEffect, useState } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import {ProfileContext} from "../context/profile";

const AppRouter = () => {

    const profile = useContext(ProfileContext)

    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route
                        path={'*'}
                        element={<Navigate to={'/error'}/>}
                    />
                    <Route
                        path={'/'}
                        element={<Main profile={profile}/>}
                    />
                    <Route
                        path={'/profile'}
                        element={<Profile profile={profile}/>}
                    />
                    <Route
                        path={'/error'}
                        element={<NotFound/>}
                    />
                </Route>
                <Route path={'/login'} element={<Login profile={profile}/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;