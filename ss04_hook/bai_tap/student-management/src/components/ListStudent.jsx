import {useEffect, useState} from "react";
import {
    getAllStudent
} from "../services/studentService";
import DeleteModal from "./DeleteModal.jsx";

const ListStudent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState(
        {
            id: "",
            name: "",
            age: "",
            major: ""
        }
    );
    const [reLoading, setReLoading] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    useEffect(() => {
        setStudentList([...getAllStudent()]);
    }, [reLoading]);

    const handleOpenDeleteModal = (student) => {
        setDeleteStudent(student);
        setIsShowDeleteModal(true);
    }

    const handleCloseDeleteModal = () => {
        setIsShowDeleteModal(false);
    }

    const handleOpenCreateModal = () => {
        setShowCreateModal(true);
    }

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h1>Danh sách sinh viên</h1>
                <button className="btn btn-success mb-3 mt-3" onClick={() => handleOpenCreateModal()}>
                    + Thêm mới sinh viên
                </button>
            </div>
            <table className={'table table-striped table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Ngành</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((student, index) => {
                    return (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.major}</td>
                            <td>
                                <button className='btn btn-danger btn-sm' onClick={() => handleOpenDeleteModal(student)}>Xóa</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <DeleteModal
                deleteStudent={deleteStudent}
                isShow={isShowDeleteModal}
                closeDeleteModal={handleCloseDeleteModal}
                setReLoading={setReLoading}
            />
        </>
    )
}

export default ListStudent;