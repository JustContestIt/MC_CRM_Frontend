import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import TodoList from "../components/TodoList/TodoList";
import MyModal from "../components/UI/MyModal/MyModal";
import TodoForm from "../components/UI/TodoForm/TodoForm";

const Main = () => {

    const [modal, setModal] = useState(false);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({
        id: 0,
        title: "",
        text: ""
    });
    const listItemForm = {
        newItem,
        setNewItem
    }

    function addItem() {
        if(!newItem) {
            alert("Введена пустая строка");
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
        setModal(false)
    }

    return (
        <div className='wrapper'>
            <MyModal visible={modal} setVisible={setModal}>
                <TodoForm listItemForm={listItemForm} addingItems={addItem} modal={modal}/>
            </MyModal>
            <Sidebar/>
            <button onClick={() => setModal(true)}/>
            <div className="d-flex flex-column w-100">
                <Topbar username="Имя Фамилия"/>
                <div>
                    <TodoList items={items} setItems={setItems}/>
                </div>
            </div>

        </div>
    );
};

export default Main;