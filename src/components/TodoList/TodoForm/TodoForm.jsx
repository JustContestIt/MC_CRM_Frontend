import React, {useState} from 'react';

const TodoForm = ({ newItemForm, itemCU, modal}) => {

    if (modal !== 1 && modal !== 2) return(<div className='d-none'></div>)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState(newItemForm.newItem.title)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [textValue, setTextValue] = useState(newItemForm.newItem.text)
    const btnLabel = ["", "Добавить задачу", "Изменить задачу"]

    function doCRUD() {
        if (modal === 1) itemCU.createItem(newItemForm.newItem)
        else itemCU.updateItem(newItemForm.newItem)
    }

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
                            text: newItemForm.newItem.text
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
                            text: e.target.value
                        })
                    }}
                ></textarea>
            </div>
            <button
                className="btn btn-primary mb-1 rounded"
                type="button"
                onClick={() => {
                    setInputValue("")
                    setTextValue("")
                    doCRUD()
                }}
            >{btnLabel[modal]}</button>
        </div>
    );
};

export default TodoForm;