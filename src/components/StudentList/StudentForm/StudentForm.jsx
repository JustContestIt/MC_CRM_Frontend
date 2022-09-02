import React, {useEffect, useState} from 'react';

const TodoForm = ({ newStudentForm }) => {

    const [inputValue, setInputValue] = useState("")
    const [textValue, setTextValue] = useState("")
    const btnLabel = ["Добавить", "Изменить"]

    useEffect(() => {
        setInputValue(newStudentForm.newItem.title)
        setTextValue(newStudentForm.newItem.body)
    }, [newStudentForm.modal])

    function doCRUD() {
        if (newStudentForm.modal === 1) newStudentForm.createItem(newStudentForm.newItem)
        else newStudentForm.updateItem(newStudentForm.newItem)
    }

    if (newStudentForm.modal !== 1 && newStudentForm.modal !== 2) return(<div className='d-none'></div>)

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
                        newStudentForm.setNewItem({
                            id: newStudentForm.newItem.id,
                            title: e.target.value,
                            body: newStudentForm.newItem.body
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
                        newStudentForm.setNewItem({
                            id: newStudentForm.newItem.id,
                            title: newStudentForm.newItem.title,
                            body: e.target.value
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
            >{btnLabel[newStudentForm.modal - 1]}</button>
        </div>
    );
};

export default TodoForm;