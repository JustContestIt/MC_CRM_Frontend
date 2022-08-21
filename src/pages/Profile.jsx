import React from 'react';
import Topbar from "../components/Topbar/Topbar";

const Profile = ({profile}) => {

    return (
        <Topbar profile={profile} title='Профиль'>
            <div className='d-flex flex-column w-100'>
                <div className="profile-content">
                    <div className='profile-personal-info'>
                        <div className="fs-3 text-start px-4 pt-2">Основная информация</div>
                        <div className='profile-info-text'>
                            <div className='fs-5'>ФИО: {profile[0]?.name || ""}</div>
                            <div>Username: {profile[0]?.username || ""}</div>
                            <div>E-mail: {profile[0]?.email || ""}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Topbar>
    );
};

export default Profile;