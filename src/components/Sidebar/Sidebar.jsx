import React, {useEffect, useState} from 'react';
import { FaBars, FaChalkboardTeacher }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { MdOutlineAppRegistration } from "react-icons/md"
import { IoIosKeypad } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbSofa } from "react-icons/tb"
import logoLarge from '../img/MnC_logo_large.png';
import {RiAdminLine} from "react-icons/ri";
import cl from "./Sidebar.module.css"
import useAuth from "../../hooks/useAuth";


const Sidebar = () => {
    const ROLES = {
        "Admin": 3,
        "Teacher": 2,
        "Student": 1
    }
    const { auth } = useAuth();
    const [adminFlag, setAdminFlag] = useState(false)
    const [teacherFlag, setTeacherFlag] = useState(false)
    const [isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path: "/",
            name: "Главная",
            roles: [ROLES.Student],
            icon: <IoIosKeypad/>
        },
        {
            path: "/admin",
            name: "Админ",
            roles: [ROLES.Admin],
            icon: <RiAdminLine/>
        },
        {
            path: "/teacher",
            name: "Тренер",
            roles: [ROLES.Teacher, ROLES.Admin],
            icon: <FaChalkboardTeacher/>
        },
        {
            path: "/profile",
            name: "Профиль",
            roles: [ROLES.Student],
            icon: <CgProfile/>
        },
        {
            path: "/lounge",
            name: "Тренер и Админ",
            roles: [ROLES.Teacher, ROLES.Admin],
            icon: <TbSofa/>
        },
        {
            path: "/login",
            name: "Вход",
            roles: [ROLES.Admin],
            icon: <FiLogIn/>
        },
        {
            path: "/register",
            name: "Регистрация",
            roles: [ROLES.Admin],
            icon: <MdOutlineAppRegistration/>
        }
    ]

    useEffect(() => {
        if (auth.roles.includes(ROLES.Admin)) setAdminFlag(true)
        if (auth.roles.includes(ROLES.Teacher)) setTeacherFlag(true)
    }, [auth])

    return (
        <div style={{width: isOpen ? "50px" : "200px"}} className={cl.sidebar}>
            <div className={cl.top_section}>
                <div style={{display: isOpen ? "none" : "block"}}>
                    <img className={cl.sidebarImage} src={logoLarge} alt={'Logo'}/>
                </div>
                <div style={{marginLeft: isOpen ? "0px" : "20px", marginRight: isOpen ? "0px" : "30px"}} className={cl.bars}>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=> {
                    if (adminFlag && (item.roles.includes(ROLES.Admin) || item.roles.includes(ROLES.Student)))
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    );
                    else if (teacherFlag && (item.roles.includes(ROLES.Teacher) || item.roles.includes(ROLES.Student)))
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    );
                    else if (item.roles.includes(ROLES.Student) && !adminFlag && !teacherFlag)
                    return (
                        <NavLink to={item.path} key={index} className={cl.sidebarLink}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "none" : "block"}} className={cl.link_text}>{item.name}</div>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default Sidebar;