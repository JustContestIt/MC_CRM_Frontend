import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const [sidebarStatus, setSidebarStatus] = useState("");

    // function makeComponentActive(){
    //     if(sidebarStatus === "active") setSidebarStatus("shadow-lg")
    //     else setSidebarStatus("active")
    // }

    return (
        <nav className={sidebarStatus} id='sidebar'>
            <div className="sidebar-header">
                <h1>M&C</h1>
            </div>
            {/*<div className="container-fluid sidebar-toggle">*/}
            {/*    <div className="btn-outline-secondary btn-rounded" onClick={makeComponentActive}>*/}
            {/*        <ButtonArrow sidebarStatus={sidebarStatus}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <ul className="components">
                <li className="active">
                    <Link to='/main'>Главная</Link>
                </li>
                <li>
                    <Link to='/profile'>Группы</Link>
                </li>
                <li>
                    <Link to='/asd'>Тренеры</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;