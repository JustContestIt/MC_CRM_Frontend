import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const MyNavbar = ({children, profile, title, btnActive}) => {
    return (
        <div className='wrapper'>
            <Sidebar btnActive={btnActive}/>
            <div className="d-flex flex-column wrapper">
                <Topbar username={profile[0]?.name} title={title}/>
                <div className='overflowHide'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyNavbar;