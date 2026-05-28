import {useEffect, useState} from "react";
import {Badge} from "react-bootstrap";
import {deleteStudentById, getAllMajor, getAllStudents, searchStudent} from "../services/studentService.js";
import DeleteModal from "../components/DeleteModal.jsx";
import {Link} from "react-router-dom";

function StudentListPage() {
    const [students, setStudents] = useState([]);
    const [majors, setMajors] = useState([]);
    const [reloading, setReloading] = useState(true);

    const [searchText, setSearchText] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({
        id: "", name: "", age: "", major: {id: "", name: ""}, gpa: ""
    });

    useEffect(() => {
        function fetchData() {
            setStudents(getAllStudents());
            setMajors(getAllMajor());
        }

        fetchData();
    }, [reloading])

    const filteredStudents = searchStudent(searchText, selectedMajor);

    const handleOpenDeleteModal = (student) => {
        setDeleteStudent(student);
        setIsShowDeleteModal(true);
    }

    const handleCloseDeleteModal = () => {
        setIsShowDeleteModal(false);
    }

    const handleDeleteStudent = () => {
        deleteStudentById(deleteStudent.id);
        setIsShowDeleteModal(false);
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Danh sách sinh viên</h2>
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Tìm tên sinh viên..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select className="form-control w-25"
                    value={selectedMajor}
                        onChange={(e) => setSelectedMajor(e.target.value)}
                >
                    <option value="">-- Chọn ngành --</option>
                    {majors.map((major) => (
                        <option key={major.id} value={major.id}>{major.name}</option>
                    ))}
                </select>
                <Link className="btn btn-success btn-sm" to="/students/add">Thêm mới sinh viên</Link>
            </div>
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-striped table-hover align-middle text-center mb-0">
                    <thead className="table-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Ngành học</th>
                        <th>GPA</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.major.name}</td>
                            <td>
                                <Badge bg={student.gpa >= 3.2 ? 'success' : 'secondary'}>
                                    {student.gpa}
                                </Badge>
                            </td>
                            <td>
                                <Link
                                    className="btn btn-primary btn-sm"
                                    to={`/students/${student.id}/edit`}
                                >
                                    Chỉnh sửa
                                </Link>
                                <button
                                    className="btn btn-danger btn-sm ms-2"
                                    onClick={() => handleOpenDeleteModal(student)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <DeleteModal isShow={isShowDeleteModal} handleClose={handleCloseDeleteModal} deleteStudent={deleteStudent} setReloading={setReloading} />
        </div>
    )
}

export default StudentListPage;