import React from 'react';
import TodoItem from "../UI/TodoItem/TodoItem";
import cl from './TodoList.module.css';

const TodoList = ({items, setItems}) => {

    if (!items) return (<div></div>)

    function deleteItem(oldItem) {
        const newArray = items.filter(item => item !== oldItem);
        setItems(newArray);
    }

    return (
        <div className="content mx-3">
            <div className='d-flex flex-column flex-wrap'>
                <ul className={"list-group list-group-numbered " + cl}>
                    {items.map(item => {
                        return(
                            <TodoItem item={item} remove={deleteItem} key={item.id}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;