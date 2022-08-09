import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import MyNavbar from "../components/MyNavbar";
import {useFetching} from "../hooks/useFetching";
import TodoService from "../API/TodoService";
import Spinner from "../components/UI/Spinner/Spinner";

const Main = ({setTitle, btnActive}) => {

    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo();
        setItems(response.data)
        setItems2(response.data)
    })

    useEffect(() => {
        fetchTodo()
        setTitle("Главная")
        btnActive(0)
    }, [])

    return (
        <Spinner isLoading={isLoading}>
            <div className='d-flex justify-content-between'>
                <TodoList items={items} setItems={setItems}/>
                <TodoList items={items2} setItems={setItems2}/>
            </div>
        </Spinner>
    );
};

export default Main;