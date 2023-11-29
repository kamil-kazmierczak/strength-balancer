import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Button, Table} from "react-bootstrap";
import ChangeRecordModal from "./components/ChangeRecordModal";
import EXERCISES from "./constants/exercises";

const StrengthBalancer = () => {

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

    const onChangeRecordHandler = (code, value) => {
        let selectedExerciseCode = [...EXERCISES.keys()].find(e => code === e)

        setLiftsGoals({
            squat: (EXERCISES.get('squat').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            frontsquat: (EXERCISES.get('frontsquat').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            deadlift: (EXERCISES.get('deadlift').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            benchpress: (EXERCISES.get('benchpress').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            militarypress: (EXERCISES.get('militarypress').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            pullups: (EXERCISES.get('pullups').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
            dips: (EXERCISES.get('dips').multiplierValue / EXERCISES.get(selectedExerciseCode).multiplierValue * value).toFixed(0),
        })
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
            <ChangeRecordModal show={showDialog} setShow={setShowDialog} onRecordChange={onChangeRecordHandler} />
        </>
    );
}

export default StrengthBalancer;