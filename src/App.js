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

function App() {

    const [profile, setProfile] = useState([])
    const [pageTitle, setPageTitle] = useState('')

    useEffect(() => {
        fetchProfile()
    }, [])

    const [fetchProfile, isLoading, profileError] = useFetching(async () => {
        const profile = await ProfileService.getProfile()
        setProfile(profile.data)
    })

    return (
        <BrowserRouter>
            <Spinner isLoading={isLoading}>
                <div className="App">
                    <MyNavbar title={pageTitle} profile={profile}>
                        <Routes>
                            <Route path='/main' element={<Main profile={profile} setTitle={setPageTitle}/>}/>
                            <Route path='/profile' element={<Profile profile={profile} setTitle={setPageTitle}/>}/>
                            <Route path='/error' element={<NotFound/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </MyNavbar>
                </div>
            </Spinner>
        </BrowserRouter>
  );
}

export default App;
