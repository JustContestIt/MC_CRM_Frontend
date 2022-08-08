import React, {useEffect, useState} from 'react';
import ProfileInfo from "../components/ProfileInfo";

const Profile = ({profile, setTitle}) => {

    useEffect(() => {
        setTitle("Профиль")
    }, [])

    return (
        <div className='d-flex flex-column w-100'>
            <ProfileInfo profile={profile}/>
        </div>
    );
};

export default Profile;