import Topbar from "../components/Topbar/Topbar";
import StudentList from "../components/StudentList/StudentList";
import TodoList from "../components/TodoList/TodoList";
import React from "react";

const Admin = () => {
    return (
        <Topbar title={'Админка'}>
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
            {/*<Users />*/}
        </Topbar>
    )
}

export default Admin
