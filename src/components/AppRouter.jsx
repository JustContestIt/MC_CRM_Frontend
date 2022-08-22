import React, { useContext, useEffect, useState } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import {ProfileContext} from "../context/profileContext";
import PublicRoutes from "../utils/PublicRoutes";

const AppRouter = () => {

    const profile = useContext(ProfileContext)

    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRoutes profile={profile} />}>
                    <Route
                        path={'/'}
                        element={<Main profile={profile}/>}
                    />
                    <Route
                        path={'/profile'}
                        element={<Profile profile={profile}/>}
                    />
                </Route>
                <Route element={<PublicRoutes/>}>
                    <Route
                        path={'/login'}
                        element={<Login profile={profile}/> }
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;