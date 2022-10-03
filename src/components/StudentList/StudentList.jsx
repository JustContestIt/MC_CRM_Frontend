import React, {useEffect, useState} from 'react';
import Student from "./Student/Student";
import cl from './StudentList.module.css';
import MyModal from "../UI/MyModal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import StudentService from "../../service/StudentService";
import Spinner from "../UI/Spinner/Spinner";
import DatePicker from "../UI/DatePicker/DatePicker";
import Register from "../../pages/Register";

const StudentList = () => {

    const [students, setStudents] = useState([]);

    const [modal, setModal] = useState(0);

    const [emptyList, setEmptyList] = useState(false)

    const [pickedDate, setPickedDate] = useState(new Date())
    const [openedCal, setOpenedCal] = useState(false)

    const [fetchStudents, isLoading, studentError] = useFetching(async () => {
        const response = await StudentService.getStudents()
        setStudents(response.data)
        if (studentError) console.log(`Ошибка в запросе студентов > ${studentError}`)
    })

    const HandledDate = () => {
        const year = pickedDate.getFullYear()
        const month = pickedDate.getMonth()
        const day = pickedDate.getDate()
        return(
            <div className='input-group mb-1'>
                <label
                    className="form-control"
                    onClick={() => setOpenedCal(true)}
                >
                    {day + "/" + (month + 1) + "/" + year}
                </label>
                <select className="form-select">
                    <option defaultValue>Выберите группу</option>
                    <option value="1">Логика 1</option>
                    <option value="2">Логика 2</option>
                    <option value="3">Логика 3</option>
                </select>
                <button className="btn btn-primary">Выбрать</button>
            </div>
        )
    }

    useEffect(() => {
        fetchStudents()
    }, [])

    useEffect(() => {
        if (students.length < 1) setEmptyList(true)
        else setEmptyList(false)
    }, [students])

    return (
        <Spinner isLoading={isLoading}>
            <MyModal visible={modal} setVisible={setModal}>
                {/*<Register/>*/}
            </MyModal>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <div className='px-4 fs-3'>Классная работа</div>
            </div>
            <HandledDate/>
            <DatePicker setPickedDate={setPickedDate} openedCal={openedCal} setOpenedCal={setOpenedCal}/>
            <div>
                <ul className="list-group">
                    {students.map(student => {
                        return(
                            <li className={`pb-2 rounded-3 mt-2 border ${cl.student}`} key={student.id}>
                                <Student
                                    student={student}
                                    empty={emptyList}
                                />
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </Spinner>
    );
};

export default StudentList;