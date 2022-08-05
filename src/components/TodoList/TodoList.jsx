import React, {useState} from 'react';
import TodoItem from "../UI/TodoItem/TodoItem";
import cl from './TodoList.module.css';
import TodoForm from "../UI/TodoForm/TodoForm";
import MyModal from "../UI/MyModal/MyModal";

const TodoList = ({items, setItems}) => {

    if (!items) return (<div></div>)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal, setModal] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newItem, setNewItem] = useState({
        id: 0,
        title: "",
        text: ""
    });
    const newItemForm = {
        newItem,
        setNewItem
    };
    const TodoItemCU = {
        createItem,
        updateItem
    }

    function createItem() {
        if(!newItem || newItem.title === "") {
            alert("Введено пустое название задачи");
            return;
        }
        const item = {
            id: items.length + 1,
            title: newItem.title,
            text: newItem.text
        };
        setItems(oldList => [...oldList, item]);
        setNewItem({
            id: 0,
            title: "",
            text: ""
        });
        setModal(0)
    }

    function deleteItem(oldItem) {
        const newArray = items.filter(item => item !== oldItem);
        setItems(newArray);
    }

    function updateItem() {
        const newList = []
        items.map(item => item.id === newItem.id ? newList.push(newItem) : newList.push(item))
        setItems(newList)
        setNewItem({
            id: 0,
            title: "",
            text: ""
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

    return (
        <div className="content mx-3">
            <MyModal visible={modal} setVisible={setModal}>
                <TodoForm
                    newItemForm={newItemForm}
                    itemCU={TodoItemCU}
                    modal={modal}
                />
            </MyModal>
            <button onClick={() => setModal(1)}>Создать</button>
            <div className='d-flex flex-column flex-wrap'>
                <ul className={"list-group list-group-numbered " + cl}>
                    {items.map(item => {
                        return(
                            <TodoItem
                                callTodoForm={callTodoForm}
                                item={item}
                                modal={modal}
                                setModal={setModal}
                                key={item.id}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;