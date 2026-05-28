import {Modal, Button} from "react-bootstrap";
import {deleteStudentById} from "../services/studentService.js";
import {toast} from "react-toastify";

function DeleteModal({isShow, handleClose, deleteStudent, setReloading}) {

    const handleDeleteStudent = () => {
        const fetchData = async () => {
            let isSuccess = deleteStudentById(deleteStudent.id);
            if (isSuccess) {
                setReloading(prev => !prev);
                toast.success("Xóa thành công");
            } else {
                toast.error("Xóa thất bại");
            }
            handleClose();
        }

        fetchData();
    }

    return (
        <div>
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sinh viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa sinh viên <span style={{color: "red"}}>{deleteStudent.name}</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleDeleteStudent()}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteModal;