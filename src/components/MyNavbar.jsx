import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const MyNavbar = ({children, navbarStatus}) => {

    return (
        <div className='wrapper'>
            <Sidebar btnActive={navbarStatus.btnActive}/>
            <div className="d-flex flex-column wrapper">
                <Topbar username={navbarStatus.profile[0]?.name} title={navbarStatus.title}/>
                <div className='overflowHide'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyNavbar;