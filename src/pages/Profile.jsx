import React, {useEffect, useState} from 'react';
import ProfileInfo from "../components/ProfileInfo";

const Profile = ({profile, setTitle, btnActive}) => {

    useEffect(() => {
        setTitle("Профиль")
        btnActive(1)
    }, [])

    return (
        <div className='d-flex flex-column w-100'>
            <ProfileInfo profile={profile}/>
        </div>
    );
};

export default Profile;