import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import Login from "./pages/Login";
import Main from "./pages/Main";
import {useFetching} from "./hooks/useFetching";
import ProfileService from "./API/ProfileService";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Spinner from "./components/UI/Spinner/Spinner";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import {AuthContext} from "./context/auth";

function App() {

    const [profile, setProfile] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [navbarStatus, setNavbarStatus] = useState({
        title: '',
        btnActive: 0,
        profile
    })

    useEffect(() => {
        fetchProfile()
    }, [])

    const [fetchProfile, isLoading, profileError] = useFetching(async () => {
        const profile = await ProfileService.getProfile()
        if (!profile) setProfile([{
            name: 'Just Contest It',
            email: 'just@contest.it',
            username: 'JCI'
        }])
        else setProfile(profile.data)
    })


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Spinner isLoading={isLoading}>
                    <div className="App">
                        <MyNavbar navbarStatus={navbarStatus}>
                            <Routes>
                                <Route
                                    path='/main'
                                    element={<Main navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus}/>}
                                />
                                <Route
                                    path='/profile'
                                    element={<Profile navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus}/>
                                }/>
                                <Route
                                    path='/error'
                                    element={<NotFound/>}
                                />
                                <Route
                                    path='*'
                                    element={<NotFound/>}
                                />
                                <Route
                                    path='/login'
                                    element={<Login/>}
                                />
                            </Routes>
                        </MyNavbar>
                    </div>
                </Spinner>
            </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
