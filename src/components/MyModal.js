import {Button, Form, Modal} from "react-bootstrap";

const MyModal = ({ show, setShow }) => {

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Squat</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="120"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setShow(false)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;