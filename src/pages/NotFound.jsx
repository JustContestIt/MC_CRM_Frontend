import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <h1>Oops!</h1>
            <p>Страница не найдена!</p>
            <div className="flexGrow">
                <Link to="/"><button className='btn btn-primary'>Главная страница</button></Link>
            </div>
        </div>
    )
}

export default NotFound