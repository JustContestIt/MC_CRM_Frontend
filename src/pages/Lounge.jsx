import { Link } from "react-router-dom"

const Lounge = () => {
    return (
        <section>
            <h1>Lounge</h1>
            <br />
            <p>Здесь могут общаться администраторы и тренера.</p>
            <div className="flexGrow">
                <Link to="/">Главная</Link>
            </div>
        </section>
    )
}

export default Lounge
