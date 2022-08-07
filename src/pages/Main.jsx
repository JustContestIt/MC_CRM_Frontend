import React, {useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import TodoList from "../components/TodoList/TodoList";

const Main = () => {

    const [items, setItems] = useState([{
        id: 0,
        title: "Первая задача",
        text: "Текст задачи"
    }]);

    return (
        <div className='wrapper'>
            <Sidebar/>
            <div className="d-flex flex-column w-100">
                <Topbar username="Имя Фамилия"/>
                <div>
                    <TodoList items={items} setItems={setItems}/>
                </div>
            </div>
        </div>
    );
};

export default Main;