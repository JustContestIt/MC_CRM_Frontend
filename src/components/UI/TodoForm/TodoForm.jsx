import React, {useState} from 'react';
import cl from './TodoForm.module.css';

const TodoForm = ({listItemForm, addingItems, modal}) => {

    if (!modal) return(<div></div>)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue1, setInputValue1] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue2, setInputValue2] = useState("")

    return (
        <div className={"input-group"}>
            <input
                type="text"
                className="form-control"
                placeholder="Заголовок"
                value={inputValue1}
                onChange={e => {
                    setInputValue1(e.target.value)
                    listItemForm.setNewItem({
                        id: listItemForm.newItem.id,
                        title: e.target.value,
                        text: listItemForm.newItem.text
                    })
                }}
            ></input>
            <input
                type="text"
                className="form-control"
                placeholder="Описание"
                value={inputValue2}
                onChange={e => {
                    setInputValue2(e.target.value)
                    listItemForm.setNewItem({
                        id: listItemForm.newItem.id,
                        title: listItemForm.newItem.title,
                        text: e.target.value
                    })
                }}
            ></input>
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                    setInputValue1("")
                    setInputValue2("")
                    addingItems()
                }}
            >Добавить задачу</button>
        </div>
    );
};

export default TodoForm;