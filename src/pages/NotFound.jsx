import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Страница не найдена!</p>
            <div className="flexGrow">
                <Link to="/">Главная страница</Link>
            </div>
        </div>
    )
}

export default NotFound