import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import EXERCISES from "../constants/exercises";

const ChangeRecordModal = ({show, setShow, onRecordChange}) => {

    const [formData, setFormData] = useState({
        code: '',
        value: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault() // zapobiega przeladowaniu strony ;)
        onRecordChange(formData.code, Number(formData.value))
    }

    const hideDialog = () => {
        setShow(false);
    }

    const handleCodeChange = (e) => {
        const code = e.target.value;

        setFormData(prevState => ({
            ...prevState,
            code: code,
            value: ''
        }));
    };

    const handleValueChange = (e) => {
        const value = e.target.value;

        setFormData(prevState => ({
            ...prevState,
            value: value
        }));
    };


    return (
        <Modal show={show} onHide={hideDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Change your weightlifting record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="formId" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="squatValue">

                        <Form.Select value={formData.code} onChange={handleCodeChange}
                                     aria-label="Default select example">
                            {
                                [...EXERCISES.keys()].map(key=> (<option key={key}
                                                value={key}>{EXERCISES.get(key).selectorLabel}</option>))
                            }
                        </Form.Select>

                        <Form.Control
                            type="number"
                            placeholder="Type in your record here..."
                            autoFocus
                            value={formData.value}
                            onChange={handleValueChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" form="formId" type="submit" onClick={hideDialog}>
                    Save
                </Button>
                <Button variant="secondary" onClick={hideDialog}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChangeRecordModal;