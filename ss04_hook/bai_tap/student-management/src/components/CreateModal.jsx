import {Modal, Button} from "react-bootstrap";

const CreateModal = ({isShow, closeCreateModal}) => {
    const handleClose = () => {
        closeCreateModal();
    }

    const handleCreate = () => {

    }
    return (
        <>
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreate}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateModal;