import React from 'react';
import TodoList from "../components/TodoList/TodoList";
import Topbar from "../components/Topbar/Topbar";
import ItemList from "../components/ItemList";
import StudentList from "../components/StudentList/StudentList";

const Main = () => {

    return (
        <Topbar title={'Главная'}>
                <div className='col-8'>
                    <div className='p-2 mx-3 rounded-5 mt-2 todoList col'>
                        <StudentList/>
                    </div>
                </div>
                <div className='col'>
                    <div className='p-2 mx-3 rounded-5 mt-2 studentList col'>
                        <TodoList/>
                    </div>
                </div>
        </Topbar>
    );
};

export default Main;