import React, {useEffect} from 'react';
import ProfileInfo from "../components/ProfileInfo";

const Profile = ({navbarStatus, setNavbarStatus}) => {

    useEffect(() => {
        setNavbarStatus({
            title: 'Профиль',
            btnActive: 2,
            profile: navbarStatus.profile
        })
    }, [])

    return (
        <div className='d-flex flex-column w-100'>
            <ProfileInfo profile={navbarStatus.profile}/>
        </div>
    );
};

export default Profile;