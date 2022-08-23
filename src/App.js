import React from "react";
import {useEffect, useState} from "react";
import {AuthContext} from "./context/authContext";
import AppRouter from "./components/AppRouter";
import {useFetching} from "./hooks/useFetching";
import ProfileService from "./service/ProfileService";
import Profile from "./pages/Profile";
import {ProfileContext} from "./context/profileContext";
import Spinner from "./components/UI/Spinner/Spinner";
import {useNavigate} from "react-router-dom";

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [profile, setProfile] = useState([])
    let navigate = useNavigate()

    const [fetchProfile, isLoading, profileError] = useFetching(async () => {
        const profile = await ProfileService.getProfile();
        setProfile(profile.data)
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
            // navigate('/')
        }
        console.log('Profile error "' + profileError + '"')
    })

    useEffect(() => {
        fetchProfile()
        console.log('LS in App "' + localStorage.getItem('auth') + '"')
        console.log('isAuth in App "' + isAuth + '"')
        console.log('Profile in App "' + profile + '"')
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <ProfileContext.Provider value={profile}>
                <Spinner isLoading={isLoading}>
                    <AppRouter/>
                </Spinner>
            </ProfileContext.Provider>
        </AuthContext.Provider>
  );
}

export default App;
