import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import MyModal from "./components/MyModal";

const StrengthBalancer = () => {

    const squatMultiplier = 1.0;
    const frontSquatMultiplier = 0.85;
    const deadLiftMultiplier = 1.2;
    const benchPressMultiplier = 0.75;
    const militaryPressMultiplier = 0.45;
    const pullUpsMultiplier = 0.675;
    const dipsMultiplier = 0.7875;

    const initialValues = {
        squat: 0,
        frontsquat: 0,
        deadlift: 0,
        benchpress: 0,
        militarypress: 0,
        pullups: 0,
        dips: 0,
    }

    const [liftsGoals, setLiftsGoals] = useState(initialValues);
    const [showDialog, setShowDialog] = useState(false);

    const onChangeSquatValueHandler = (value) => {
        setLiftsGoals(prevState => ({
            ...prevState,
            squat: value.toFixed(0),
        }))
        setLiftsGoals(prevState => ({
            ...prevState,
            frontsquat: (frontSquatMultiplier * prevState.squat).toFixed(0),
            deadlift: (deadLiftMultiplier * prevState.squat).toFixed(0),
            benchpress: (benchPressMultiplier * prevState.squat).toFixed(0),
            militarypress: (militaryPressMultiplier * prevState.squat).toFixed(0),
            pullups: (pullUpsMultiplier * prevState.squat).toFixed(0),
            dips: (dipsMultiplier * prevState.squat).toFixed(0),
        }))
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Ćwiczenie</th>
                    <th>Oczekiwany wynik [kg]</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Przysiad</td>
                    <td>{liftsGoals.squat}</td>
                </tr>
                <tr>
                    <td>Przysiad - front</td>
                    <td>{liftsGoals.frontsquat}</td>
                </tr>
                <tr>
                    <td>Wyciskanie sztangi leżąc</td>
                    <td>{liftsGoals.benchpress}</td>
                </tr>
                <tr>
                    <td>Wyciskanie żołnierskie</td>
                    <td>{liftsGoals.militarypress}</td>
                </tr>
                <tr>
                    <td>Podciąganie - podchwyt</td>
                    <td>{liftsGoals.pullups}</td>
                </tr>
                <tr>
                    <td>Dips</td>
                    <td>{liftsGoals.dips}</td>
                </tr>
                <tr>
                    <td>Martwy ciąg</td>
                    <td>{liftsGoals.deadlift}</td>
                </tr>
                </tbody>
            </Table>
            <Button onClick={() => setShowDialog(true)}>Change your record</Button>
            <MyModal show={showDialog} setShow={setShowDialog} onSquatChange={onChangeSquatValueHandler} />
        </>
    );
}

export default StrengthBalancer;