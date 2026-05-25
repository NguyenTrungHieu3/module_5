import {Modal, Button} from "react-bootstrap";
import {deleteStudentById} from "../services/studentService.js";

const DeleteModal = ({deleteStudent, isShow, closeDeleteModal, setReLoading}) => {

    const handleClose = () => {
        closeDeleteModal();
    }

    const handleDelete = () => {
        deleteStudentById(deleteStudent.id);

        closeDeleteModal();
        setReLoading(prev => !prev);
    }

    return (
        <>
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {deleteStudent.name} </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal;