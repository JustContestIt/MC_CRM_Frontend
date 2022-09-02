import React, {useEffect, useState} from 'react';
import Student from "./Student/Student";
import cl from './StudentList.module.css';
import StudentForm from "./StudentForm/StudentForm";
import MyModal from "../UI/MyModal/MyModal";
import {useFetching} from "../../hooks/useFetching";
import TodoService from "../../service/TodoService";
import StudentService from "../../service/StudentService";
import Spinner from "../UI/Spinner/Spinner";

const StudentList = () => {

    const [students, setStudents] = useState([]);

    const [modal, setModal] = useState(0);

    const [newStudent, setNewStudent] = useState({
        id: 0,
        name: '',
        username: "",
        age: 0,
        email: "",
        phone: "",
        groupId: 0,
        parentPhone: ""
    });

    const emptyStudent = {
        id: 0,
        name: '',
        username: "",
        age: 0,
        email: "",
        phone: "",
        groupId: 0,
        parentPhone: ""
    }

    const zeroStudents = [{
        id: 0,
        name: 'Студентов нет',
        username: "",
        age: 0,
        email: "",
        phone: "",
        groupId: 0,
        parentPhone: ""
    }]

    const newStudentForm = {
        newStudent,
        setNewStudent,
        createStudent,
        updateStudent,
        modal
    }

    const [emptyList, setEmptyList] = useState(false)

    function createStudent() {
        if(!newStudent || newStudent.username === "") {
            alert("Введен пустой логин")
            return
        }
        let newId = 1
        if (students[0].fullName === zeroStudents[0].fullName) setStudents([])
        else newId = students.length + 1
        setEmptyList(false)
        const student = {
            id: newId,
            ...newStudent
        };
        setStudents(oldList => [...oldList, student]);
        setNewStudent(emptyStudent);
        setModal(0)
    }

    function deleteStudent(oldItem) {
        const newArray = students.filter(item => item !== oldItem)
        if (newArray.length === 0) {
            setEmptyList(true)
            setNewStudent(emptyStudent);
            setStudents(zeroStudents)
            return
        }
        let id = 1
        newArray.map(item => {
            item.id = id
            id += 1
            return item
        })
        setStudents(newArray);
    }

    function updateStudent() {
        const newList = []
        students.map(item => item.id === newStudent.id ? newList.push(newStudent) : newList.push(item))
        setStudents(newList)
        setNewStudent(emptyStudent);
        setModal(0)
    }

    function callStudentForm(item, modalId) {
        if (modalId === 2) {
            setNewStudent(item)
            setModal(2)
        }
        else deleteStudent(item)
    }

    const resetStudent = () => {
        setNewStudent(emptyStudent)
    }

    const [fetchStudents, isLoading, studentError] = useFetching(async () => {
        const response = await StudentService.getStudents()
        setStudents(response.data)
        if (studentError) console.log(`This is todoError "${studentError}"`)
    })

    useEffect(() => {
        fetchStudents()
    }, [])

    return (
        <Spinner isLoading={isLoading}>
            {/*<MyModal visible={modal} setVisible={setModal} resetItem={resetStudent}>*/}
            {/*    <StudentForm newStudentForm={newStudentForm}/>*/}
            {/*</MyModal>*/}
            <div className='d-flex justify-content-between align-items-center'>
                <div className='px-4 fs-3'>Студенты</div>
                <button
                    type='button'
                    className='btn btn-primary mb-2 mt-3'
                    onClick={() => setModal(1)}
                >Создать</button>
            </div>
            <div>
                <ul className="list-group">
                    {students.map(student => {
                        return(
                            <li className={`pb-2 rounded-3 mt-2 border ${cl.student}`} key={student.id}>
                                <Student
                                    callStudentForm={callStudentForm}
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