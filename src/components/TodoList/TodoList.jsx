import React, {useState} from 'react';
import TodoItem from "./TodoItem/TodoItem";
import cl from './TodoList.module.css';
import TodoForm from "./TodoForm/TodoForm";
import MyModal from "../UI/MyModal/MyModal";

const TodoList = ({items, setItems}) => {

    const [modal, setModal] = useState(0);
    const [newItem, setNewItem] = useState({
        id: 0,
        title: "",
        body: ""
    });
    const newItemForm = {
        newItem,
        setNewItem,
        newItemExample: {
            id: 0,
            title: "",
            body:""
        }
    };

    const [emptyList, setEmptyList] = useState(false)
    const TodoItemCU = {
        createItem,
        updateItem
    }

    function createItem() {
        if(!newItem || newItem.title === "") {
            alert("Введено пустое название");
            return;
        }
        setEmptyList(false)
        const item = {
            id: items.length + 1,
            title: newItem.title,
            body: newItem.body
        };
        setItems(oldList => [...oldList, item]);
        setNewItem({
            id: 0,
            title: "",
            body: ""
        });
        setModal(0)
    }

    function deleteItem(oldItem) {
        const newArray = items.filter(item => item !== oldItem)
        if (newArray.length === 0) {
            setEmptyList(true)
            return
        }
        let id = 1
        newArray.map(item => {
            item.id = id
            id += 1
            return item
        })
        setItems(newArray);
    }

    function updateItem() {
        const newList = []
        items.map(item => item.id === newItem.id ? newList.push(newItem) : newList.push(item))
        setItems(newList)
        setNewItem({
            id: 0,
            title: "",
            body: ""
        });
        setModal(0)
    }

    function callTodoForm(item, modalId) {
        if (modalId === 2) {
            setNewItem(item)
            setModal(2)
        }
        else deleteItem(item)
    }

    return (
        <div className={"p-2 mx-3 rounded-3 mt-2 " + cl.todoList}>
            <MyModal visible={modal} setVisible={setModal} setItem={newItemForm}>
                <TodoForm newItemForm={newItemForm} itemCU={TodoItemCU} modal={modal}/>
            </MyModal>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#todoFormExample">
                Launch demo modal
            </button>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='px-4 fs-3'>Задачи</div>
                <button
                    type='button'
                    className='btn btn-primary mb-2 mt-3'
                    onClick={() => setModal(1)}
                >Создать</button>
            </div>
            <div className='d-flex flex-column'>
                <ul className="list-group">
                    {items.map(item => {
                        return(
                            <li className={`pb-2 list-group-item rounded-3 mt-2 border ${cl.todoItem}`} key={item.id}>
                                <TodoItem
                                    callTodoForm={callTodoForm}
                                    item={item}
                                    empty={emptyList}
                                />
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoList;