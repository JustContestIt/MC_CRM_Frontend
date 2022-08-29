import React, { useState } from 'react';
import { FaBars, FaChalkboardTeacher }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { MdOutlineAppRegistration } from "react-icons/md"
import { IoIosKeypad } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbSofa } from "react-icons/tb"
import logoLarge from '../img/MnC_logo_large.png';
import {RiAdminLine} from "react-icons/ri";


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path: "/",
            name: "Главная",
            icon: <IoIosKeypad/>
        },
        {
            path: "/admin",
            name: "Админ",
            icon: <RiAdminLine/>
        },
        {
            path: "/teacher",
            name: "Тренер",
            icon: <FaChalkboardTeacher/>
        },
        {
            path: "/profile",
            name: "Профиль",
            icon: <CgProfile/>
        },
        {
            path: "/lounge",
            name: "Тренера и Админ",
            icon: <TbSofa/>
        },
        {
            path: "/login",
            name: "Вход",
            icon: <FiLogIn/>
        },
        {
            path: "/register",
            name: "Регистрация",
            icon: <MdOutlineAppRegistration/>
        }
    ]
    return (
        <div style={{width: isOpen ? "50px" : "200px"}} className="sidebar">
            <div className="top_section">
                <div style={{display: isOpen ? "none" : "block"}}>
                    <img className={'sidebar-image'} src={logoLarge} alt={'Logo'}/>
                </div>
                <div style={{marginLeft: isOpen ? "0px" : "20px", marginRight: isOpen ? "0px" : "30px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="sidebarLink">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "none" : "block"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Sidebar;