import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";

const NotFound = () => {
    return (
        <div className={'d-flex'}>
            {/*<Sidebar/>*/}
            <div className='login d-flex justify-content-center align-items-center w-100 overflow-hidden'>
                <h1>Неправильный URL</h1>
            </div>
        </div>
    );
};

export default NotFound;