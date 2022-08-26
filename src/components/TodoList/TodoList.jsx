import React, {useState} from 'react';
import TodoItem from "./TodoItem/TodoItem";
import cl from './TodoList.module.css';
import TodoForm from "./TodoForm/TodoForm";
import MyModal from "../UI/MyModal/MyModal";

const TodoList = ({items, setItems}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal, setModal] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        const newArray = items.filter(item => item !== oldItem);
        let id = 0
        newArray.map(item => {
            item.id = id
            id += 1
        })
        setItems(newArray);
        if (newArray.length === 0) setEmptyList(true)
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
        else if (modalId === 3) deleteItem(item)
    }

    if (items.length === 0) {
        return (
            <div className={"p-2 content mx-3 rounded-3 mt-2 " + cl.todoList}>
                <MyModal visible={modal} setVisible={setModal}>
                    <TodoForm newItemForm={newItemForm} itemCU={TodoItemCU} modal={modal}/>
                </MyModal>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='px-4 fs-3'>Задачи</div>
                    <button
                        type='button'
                        className='btn btn-primary mb-2 mt-3'
                        onClick={() => setModal(1)}
                    >Создать
                    </button>
                </div>
                <div className='d-flex flex-column'>
                    <ul className="list-group">
                        <li className={"pb-2 list-group-item rounded-3 mt-2 border " + cl.todoItem}>
                            <TodoItem empty={true} itemId={0} item={newItem} callTodoForm={callTodoForm}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className={"p-2 mx-3 rounded-3 mt-2 " + cl.todoList}>
            <MyModal visible={modal} setVisible={setModal} setItem={newItemForm}>
                <TodoForm newItemForm={newItemForm} itemCU={TodoItemCU} modal={modal}/>
            </MyModal>
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
                    <TodoItem callTodoForm={callTodoForm} item={items} empty={emptyList} itemId={0}/>
                    {items.map(item => {
                        return(
                            <li className={"pb-2 list-group-item rounded-3 mt-2 border " + cl.todoItem} key={item.id}>
                                <TodoItem
                                    callTodoForm={callTodoForm}
                                    item={item}
                                    empty={emptyList}
                                    itemId={1}
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