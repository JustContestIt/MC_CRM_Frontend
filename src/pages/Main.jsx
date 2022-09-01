import React from 'react';
import TodoList from "../components/TodoList/TodoList";
import Topbar from "../components/Topbar/Topbar";
import ItemList from "../components/ItemList/ItemList";

const Main = () => {

    return (
        <Topbar title={'Главная'}>
            <div>
                <ItemList>
                    <TodoList/>
                </ItemList>
            </div>
        </Topbar>
    );
};

export default Main;