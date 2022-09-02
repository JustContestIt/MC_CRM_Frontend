import cl from './Topbar.module.css';
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import {useEffect, useState} from "react";
import Icon from "../UI/Icon/Icon";
import {RiArrowDropDownLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const Topbar = ({children, title}) => {

    const { auth } = useAuth()

    const [topNavToggle, setTopNavToggle] = useState("")

    const toggle = (e) => {
        e.preventDefault()
        if (topNavToggle === "") setTopNavToggle(cl.topNav + cl.responsive)
        else setTopNavToggle(cl.topNav)
    }

    useEffect(() => {
        setTopNavToggle(cl.topNav)
    }, [])

    return (
        <div className="m-1 container-fluid">
            <div className="row">
                <div className={topNavToggle}>
                    <div className={cl.topNavTitle}>{title}</div>
                    <div className={cl.dropdown}>
                        <button className={cl.dropBtn}>
                            <span className='d-flex justify-content-center align-items-center'>
                                {auth.username || auth.user || "JCI"}
                                <Icon icon={<RiArrowDropDownLine/>} classes={cl.dropdownIcon}/>
                            </span>
                        </button>
                        <div className={cl.dropdownContent}>
                            <Link to='/profile' className={cl.linkOne}>Профиль</Link>
                            <a href='/login' className={cl.linkTwo} onClick={useLogout}>Выйти</a>
                        </div>
                    </div>
                    <a href="#" className={cl.icon} onClick={toggle}>&#9776;</a>
                </div>
            </div>
            <div className='mt-4 row'>
                {children}
            </div>
        </div>
    );
};

export default Topbar;