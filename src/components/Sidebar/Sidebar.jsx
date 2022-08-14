import React from 'react';
import {useState} from "react";
// import {Link} from "react-router-dom";
import ListItem from "../UI/ListItem/ListItem";
import ButtonArrow from "../UI/ButtonArrow/ButtonArrow";
import cl from './Sidebar.module.css';

const Sidebar = ({btnActive}) => {

    const [sidebarStatus, setSidebarStatus] = useState("");

    function makeComponentActive(){
        if(sidebarStatus === "active") setSidebarStatus("")
        else setSidebarStatus("active")
    }

    return (
        <nav className={sidebarStatus} id='sidebar'>
            <div className="sidebar-header">
                <h1>M&C</h1>
            </div>
            <div className={"container-fluid " + cl.sidebarToggle} onClick={makeComponentActive}>
                <div className="btn-outline-secondary btn-rounded">
                    <ButtonArrow sidebarStatus={sidebarStatus}/>
                </div>
            </div>
            <ul className={cl.ulComponents}>
                <ListItem styles={''}>
                    <a href={'#'}>Главная</a>
                </ListItem>
                <ListItem styles={'active'}>
                    <a href={'#'}>Группы</a>
                </ListItem>
            </ul>
        </nav>
    );
};

export default Sidebar;