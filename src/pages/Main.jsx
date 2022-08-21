import React, {useEffect, useState} from 'react';
import TodoList from "../components/TodoList/TodoList";
import {useFetching} from "../hooks/useFetching";
import TodoService from "../API/TodoService";
import Spinner from "../components/UI/Spinner/Spinner";
import Topbar from "../components/Topbar/Topbar";

const Main = ({profile}) => {

    const [items, setItems] = useState([]);
    const [fetchTodo, isLoading, todoError] = useFetching(async () => {
        const response = await TodoService.getTodo();
        setItems(response.data)
    })

    useEffect(() => {
        fetchTodo()
    }, [])

    return (
            <Topbar profile={profile} title={'Главная'}>
                <Spinner isLoading={isLoading}>
                    <div>
                        <TodoList items={items} setItems={setItems}/>
                    </div>
                </Spinner>
            </Topbar>
    );
};

export default Main;