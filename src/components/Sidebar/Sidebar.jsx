import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import ListItem from "../UI/ListItem/ListItem";
import ButtonArrow from "../UI/ButtonArrow/ButtonArrow";

const Sidebar = (btnActive) => {

    const [sidebarStatus, setSidebarStatus] = useState("");
    const [isActive, setIsActive] = useState(false)

    function makeComponentActive(){
        if(sidebarStatus === "active") setSidebarStatus("shadow-lg")
        else setSidebarStatus("active")
    }

    return (
        <nav className={sidebarStatus} id='sidebar'>
            <div className="sidebar-header">
                <h1>M&C</h1>
            </div>
            <div className="container-fluid sidebar-toggle">
                <div className="btn-outline-secondary btn-rounded" onClick={makeComponentActive}>
                    <ButtonArrow sidebarStatus={sidebarStatus}/>
                </div>
            </div>
            <ul className="components">
                <ListItem isActive={isActive}>
                    <Link to='/main'>Главная</Link>
                </ListItem>
                <ListItem isActive={isActive}>
                    <Link to='/profile'>Группы</Link>
                </ListItem>
                <ListItem isActive={isActive}>
                    <Link to='/asd'>Тренеры</Link>
                </ListItem>
            </ul>
        </nav>
    );
};

export default Sidebar;