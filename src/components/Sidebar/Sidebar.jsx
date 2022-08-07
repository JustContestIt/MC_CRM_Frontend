import React from 'react';
import {useState} from "react";

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
                    <a href="src/components/Sidebar/Sidebar#">Главная</a>
                </li>
                <li>
                    <a href="src/components/Sidebar/Sidebar#">Группы</a>
                </li>
                <li>
                    <a href="src/components/Sidebar/Sidebar#">Тренеры</a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;