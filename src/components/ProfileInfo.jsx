import React from 'react';

const ProfileInfo = ({profile}) => {
    return (
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
    );
};

export default ProfileInfo;