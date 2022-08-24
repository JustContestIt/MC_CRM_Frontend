import React, {useContext} from "react";
import {useEffect, useState} from "react";
import {AuthContext} from "./context/authContext";
import AppRouter from "./components/AppRouter";
import {useFetching} from "./hooks/useFetching";
import ProfileService from "./service/ProfileService";
import Profile from "./pages/Profile";
import {ProfileContext} from "./context/profileContext";
import Spinner from "./components/UI/Spinner/Spinner";
import {useNavigate} from "react-router-dom";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {

    const [isAuth, setIsAuth] = useState(false)
    const {store} = useContext(Context)
    const [profile, setProfile] = useState([])
    // let navigate = useNavigate()

    const [fetchProfile, isLoadingProfile, profileError] = useFetching(async () => {
        const profile = await ProfileService.getProfile();
        setProfile(profile.data)
        if (profileError) console.log('Profile error "' + profileError + '"')
    })

    useEffect(() => {
        console.log(store.isAuth)
        fetchProfile()
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <ProfileContext.Provider value={profile}>
                <Spinner isLoading={store.isLoading}>
                    <AppRouter/>
                </Spinner>
            </ProfileContext.Provider>
        </AuthContext.Provider>
  );
}

export default observer(App);
