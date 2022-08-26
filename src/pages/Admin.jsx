import { Link } from "react-router-dom";
import Users from '../components/Users';

const Admin = () => {
    return (
        <section>
            <h1>Страница Админа</h1>
            <br />
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="/">Главная</Link>
            </div>
        </section>
    )
}

export default Admin
