import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const MyModal = ({ show, setShow, onSquatChange }) => {

    const [formData, setFormData] = useState({ squatValue: '' });

    const handleSubmit = (e) => {
        e.preventDefault() // zapobiega przeladowaniu strony ;)

        onSquatChange(Number(formData.squatValue))
    }

    const handleChange = (e) => {
        const value = e.target.value;

        setFormData(prevState => ({
            ...prevState,
            squatValue: value
        }));
    };


    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="formId" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="squatValue">
                        <Form.Label>Squat</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="120"
                            autoFocus
                            value={formData.squatValue}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" form="formId" type="submit" onClick={() => setShow(false)}>
                    Save
                </Button>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;