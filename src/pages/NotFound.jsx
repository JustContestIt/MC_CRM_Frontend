import {useNavigate} from "react-router-dom"
import logo from "../components/img/MnC_logo_small.png"

const NotFound = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='notFound'>
            <img className='notFoundLogo' src={logo} alt='logo'/>
            <h1>Oops!</h1>
            <p>Страница не найдена!</p>
            <button className='btn btn-primary' onClick={goBack}>Вернуться назад</button>
        </div>
    )
}

export default NotFound