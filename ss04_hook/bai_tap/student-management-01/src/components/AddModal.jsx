import {Button, Modal} from "react-bootstrap";
import {addNewStudent} from "../services/studentServices.js";

function AddModal({addStudent, setAddStudent, isShowModal, handleClose, setReloading}) {
    const handleAddStudent = () => {
        addNewStudent(addStudent);
        setReloading(prev => !prev);
        handleClose();
        setAddStudent({
            id: '',
            name: "",
            gender: "",
            score: ''
        })
    }

    return (
        <>
            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới sinh viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="addName">Tên</label> <br/>
                        <input id="addName" type="text" value={addStudent.name} onChange={(e) => setAddStudent({...addStudent, name: e.target.value})} /> <br/>
                        <label htmlFor="addGender">Giới tính</label><br/>
                        <select id="addGender" value={addStudent.gender} onChange={(e) => setAddStudent({...addStudent, gender: e.target.value})} >
                            <option value="">-- Chọn giới tính --</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select><br/>
                        <label htmlFor="addScore">Điểm số</label><br/>
                        <input id="addScore" type="number" value={addStudent.score} onChange={(e) => setAddStudent({...addStudent, score: e.target.value})} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button variant="primary" onClick={() => handleAddStudent()}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;