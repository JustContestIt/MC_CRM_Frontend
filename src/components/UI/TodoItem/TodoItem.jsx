import React from 'react';
import cl from './TodoItem.module.css';

const TodoItem = (props) => {

    return (
        <li
            className={"mb-1 pb-2 list-group-item " + cl.listItem}
            key={props.item.id}
        >
            <div className="d-flex w-100 justify-content-start mt-3">
                <h5 className="mb-1 mx-4 text-break">{props.item.title}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-1 mt-3 text-break">{props.item.text}</p>
                <div>
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
            </div>
        </li>
    );
};

export default TodoItem;