import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

const NotFound = () => {
    return (
        <div className={'w-100'}>
            {/*<Sidebar/>*/}
            <Topbar />
            <div className='d-flex justify-content-center align-items-center w-100 overflow-hidden'>
                <h1>Неправильный URL</h1>
            </div>
        </div>
    );
};

export default NotFound;