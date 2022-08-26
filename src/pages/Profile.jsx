import Topbar from "../components/Topbar/Topbar";
import useAuth from "../hooks/useAuth";

const Profile = () => {

    const { auth } = useAuth()

    const ROLES = {
        "Admin": 3,
        "Teacher": 2,
        "Student": 1
    }

    return (
        <Topbar title='Профиль'>
            <div className='d-flex flex-column w-100'>
                <div className="profile-content">
                    <div className='profile-personal-info'>
                        <div className="fs-3 text-start px-4 pt-2">Основная информация</div>
                        <div className='profile-info-text'>
                            <div className='fs-5'>ФИО: {auth.username || auth.user || ""}</div>
                            <div>Роли: {auth.roles.map(role => {
                                if (role === ROLES.Admin) return (<span key={role}>Админ</span>)
                                if (role === ROLES.Teacher) return (<span key={role}>-Тренер-</span>)
                                if (role === ROLES.Student)  return (<span key={role}>Студент-</span>)
                                return(<span key={role}></span>)
                            })}</div>
                            <div className='text-break'>Ключ: {auth.accessToken || ""}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Topbar>
    );
};

export default Profile;