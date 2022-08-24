import React, {useContext} from 'react';
import Topbar from "../components/Topbar/Topbar";
import {StoreContext} from "../index";

const Profile = () => {

    const {store} = useContext(StoreContext)

    return (
        <Topbar title='Профиль'>
            <div className='d-flex flex-column w-100'>
                <div className="profile-content">
                    <div className='profile-personal-info'>
                        <div className="fs-3 text-start px-4 pt-2">Основная информация</div>
                        <div className='profile-info-text'>
                            <div className='fs-5'>ФИО: {store.user?.email || ""}</div>
                            <div>Id: {store.user?.id || ""}</div>
                            <div>E-mail: {store.user?.email || ""}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Topbar>
    );
};

export default Profile;