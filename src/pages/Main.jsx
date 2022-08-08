import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import MyNavbar from "../components/MyNavbar";
import {useFetching} from "../hooks/useFetching";
import TodoService from "../API/TodoService";
import Spinner from "../components/UI/Spinner/Spinner";

const Main = ({profile, setTitle}) => {

    const [items, setItems] = useState([]);
    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo();
        setItems(response.data)
    })

    useEffect(() => {
        fetchTodo()
        setTitle("Главная")
    }, [])

    return (
        <Spinner isLoading={isLoading}>
            <TodoList items={items} setItems={setItems}/>
        </Spinner>
    );
};

export default Main;