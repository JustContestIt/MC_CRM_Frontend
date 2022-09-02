const Student = ({empty, student, callStudentForm}) => {

    if (empty) {
        return (
            <div className="my-2 fs-4 text-break text-center">{student.name}</div>
        )
    }

    return (
        <>
            <div className="text-start fs-5">{student.id || 0}</div>
            <div className='mx-4 d-flex flex-column'>
                <div className="fs-5">ФИО: {student.name || "JustContestIt"}</div>
                <div className="fs-5">Группа: {student.company.name || student?.groupId || "Группа 4"}</div>
                <div className="fs-5 mb-3">Username: {student.username || "JCI"}</div>
                <div>
                    <p className="fs-6">Почта: {student.email || ""}</p>
                    <p className="fs-6">
                        Адрес:
                        {
                            ` ${student.address.city || ""},
                             ${student.address.street || ""} st., 
                             ${student.address.suite || ""}`
                        }
                    </p>
                    <p className="fs-6">Телефон: {student.phone || "+77777777777"}</p>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <button
                    type='button'
                    className='btn btn-outline-primary'
                    onClick={() => callStudentForm(student, 2)}
                >
                    Редактировать
                </button>
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => callStudentForm(student, 3)}
                >
                    Сделано
                </button>
            </div>
        </>
    );
};

export default Student;