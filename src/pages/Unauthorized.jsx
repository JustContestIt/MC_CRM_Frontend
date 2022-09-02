import {Link, useNavigate} from "react-router-dom"
import logo from "../components/img/MnC_logo_small.png";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='unAuthorized'>
            <img className='unAuthorizedLogo' src={logo} alt='logo'/>
            <h1>Доступ закрыт</h1>
            <p>У вас недостаточно прав для доступа к этой странице</p>
            <button className='btn btn-primary' onClick={goBack}>Вернуться назад</button>
        </div>
    )
}

export default Unauthorized
