import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import {useFetching} from "../hooks/useFetching";
import TodoService from "../service/TodoService";
import Spinner from "../components/UI/Spinner/Spinner";
import Topbar from "../components/Topbar/Topbar";
import useAuth from "../hooks/useAuth";

const Main = () => {

    const [items, setItems] = useState([]);
    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo()
        setItems(response.data)
        if (todoError) console.log(`This is todoError "${todoError}"`)
    })

    useEffect(() => {
        fetchTodo()
    }, [])

    return (
        <Topbar title={'Главная'}>
            <Spinner isLoading={isLoading}>
                <div>
                    <TodoList items={items} setItems={setItems}/>
                </div>
            </Spinner>
        </Topbar>
    );
};

export default Main;