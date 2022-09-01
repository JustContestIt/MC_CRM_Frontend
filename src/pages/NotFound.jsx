import { Link } from "react-router-dom"
import logo from "../components/img/MnC_logo_small.png"

const NotFound = () => {
    return (
        <div className='notFound'>
            <img className='notFoundLogo' src={logo} alt='logo'/>
            <h1>Oops!</h1>
            <p>Страница не найдена!</p>
            <Link to="/"><button className='btn btn-primary'>Главная</button></Link>
        </div>
    )
}

export default NotFound