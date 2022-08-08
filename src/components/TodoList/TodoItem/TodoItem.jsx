import React from 'react';
import cl from './TodoItem.module.css';

const TodoItem = (props) => {

    if (props.itemId === 0 && !props.empty) return(<div className="d-none"></div>)

    else if (props.empty) return (
        <li className={"pb-2 list-group-item rounded-3 mt-2 border " + cl.todoItem}>
            <div className="my-2 fs-4 text-break text-center" id='todoItem'>Задач нет</div>
        </li>
    )

    else return (
        <li className={"pb-2 list-group-item rounded-3 mt-2 border " + cl.todoItem}>
            <div className="my-2 fs-4 text-break text-center" id='todoItem'>{props.item.title}</div>
            <p className="mb-1 fs-6 text-break">{props.item.body}</p>
            <div className='mt-3 d-flex justify-content-between'>
                <button
                    type='button'
                    className='btn btn-outline-primary'
                    onClick={() => props.callTodoForm(props.item, 2)}
                >
                    Редактировать
                </button>
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => props.callTodoForm(props.item, 3)}
                >
                    Сделано
                </button>
            </div>
        </li>
    );
};

export default TodoItem;