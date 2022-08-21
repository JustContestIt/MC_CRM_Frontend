import React, { useState } from 'react';
import { FaBars }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { IoIosKeypad } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import logoLarge from '../img/MnC_logo_large.png';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Главная",
            icon:<IoIosKeypad/>
        },
        {
            path:"/profile",
            name:"Профиль",
            icon:<CgProfile/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<FiLogIn/>
        }
    ]
    return (
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <div style={{display: isOpen ? "block" : "none"}}>
                    <img className={'sidebar-image'} src={logoLarge} alt={'Logo'}/>
                </div>
                <div style={{marginLeft: isOpen ? "20px" : "0px", marginRight: isOpen ? "30px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="navLink">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Sidebar;