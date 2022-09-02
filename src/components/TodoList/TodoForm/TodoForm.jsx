import React, {useEffect, useState} from 'react';

const TodoForm = ({ newItemForm }) => {

    const [inputValue, setInputValue] = useState("")
    const [textValue, setTextValue] = useState("")
    const btnLabel = ["Добавить", "Изменить"]

    useEffect(() => {
        setInputValue(newItemForm.newItem.title)
        setTextValue(newItemForm.newItem.body)
    }, [newItemForm.modal])

    function doCRUD() {
        if (newItemForm.modal === 1) newItemForm.createItem(newItemForm.newItem)
        else newItemForm.updateItem(newItemForm.newItem)
    }

    if (newItemForm.modal !== 1 && newItemForm.modal !== 2) return(<div className='d-none'></div>)

    return (
        <div className="input-group d-flex flex-column">
            <div className="mb-3">
                <label className="form-label">Заголовок</label>
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value)
                        newItemForm.setNewItem({
                            id: newItemForm.newItem.id,
                            title: e.target.value,
                            body: newItemForm.newItem.body
                        })
                    }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Описание</label>
                <textarea
                    className="form-control"
                    rows="3"
                    value={textValue}
                    onChange={e => {
                        setTextValue(e.target.value)
                        newItemForm.setNewItem({
                            id: newItemForm.newItem.id,
                            title: newItemForm.newItem.title,
                            body: e.target.value
                        })
                    }}
                ></textarea>
            </div>
            <button
                className="btn btn-primary mb-1 rounded rounded-3"
                type="button"
                onClick={() => {
                    setInputValue("")
                    setTextValue("")
                    doCRUD()
                }}
            >
                {btnLabel[newItemForm.modal - 1]}
            </button>
        </div>
    );
};

export default TodoForm;