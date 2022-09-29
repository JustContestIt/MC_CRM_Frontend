import cl from './Topbar.module.css';
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import {useEffect, useState} from "react";
import Icon from "../UI/Icon/Icon";
import {RiArrowDropDownFill} from "react-icons/ri";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

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
                            <div className='d-flex justify-content-center align-items-center'>
                                {auth.username || auth.user || "JCI"}
                                <Icon icon={<RiArrowDropDownFill/>} classes={cl.dropdownIcon}/>
                            </div>
                        </button>
                        <div className={cl.dropdownContent}>
                            <Link to='/profile' className={cl.linkOne}>Профиль</Link>
                            <a href='/login' className={cl.linkTwo} onClick={useLogout}>Выйти</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 row'>
                {children}
            </div>
        </div>
    );
};

export default Topbar;