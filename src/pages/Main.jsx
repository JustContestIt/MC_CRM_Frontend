import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import {useFetching} from "../hooks/useFetching";
import TodoService from "../API/TodoService";
import Spinner from "../components/UI/Spinner/Spinner";

const Main = ({navbarStatus, setNavbarStatus}) => {

    const [items, setItems] = useState([]);
    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo();
        setItems(response.data)
    })

    useEffect(() => {
        fetchTodo()
        setNavbarStatus({
            title: 'Главная',
            btnActive: 1,
            profile: navbarStatus.profile
        })
    }, [])

    return (
        <Spinner isLoading={isLoading}>
            <div>
                <TodoList items={items} setItems={setItems}/>
            </div>
        </Spinner>
    );
};

export default Main;