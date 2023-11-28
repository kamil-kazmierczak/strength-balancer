import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const exercises = [
    {multiplier: 1.0, code: 'squat', name: 'Classic Squat'},
    {multiplier: .85, code: 'frontsquat', name: 'Front Squat'},
    {multiplier: 1.2, code: 'deadlift', name: 'Dead Lift'},
    {multiplier: .75, code: 'benchpress', name: 'Bench Press'},
    {multiplier: .45, code: 'militarypress', name: 'OHP'},
    {multiplier: .675, code: 'pullups', name: 'Pull Ups'},
    {multiplier: .7875, code: 'dips', name: 'Dips'}
];

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
                                exercises.map(exercise => {
                                    return (
                                        <option value={exercise.code}>{exercise.name}</option>
                                    );
                                })}

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