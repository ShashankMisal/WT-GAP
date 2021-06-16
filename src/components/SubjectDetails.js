import React from 'react'
import { useParams } from 'react-router-dom'
import WT from '../data/WT.json'
import SPOS from '../data/SPOS.json'
import ESIOT from '../data/ESIOT.json'
import SMD from '../data/SMD.json'
import Container from '@material-ui/core/Container';
import TimelineComponent from './TimelineComponent';
import { Paper } from '@material-ui/core';




function SubjectDetails() {
    const { subjectName } = useParams()

    const getData = (subjectName) => {

            if(subjectName === "WT" )
                return WT
            else if(subjectName === "SPOS")
                return SPOS
            else if(subjectName === "ESIOT")
                return ESIOT
            else if(subjectName === "SMD")  
                return SMD
            else return []
        
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Paper style={{ textAlign: "center", marginTop: "15px", padding: "10px" }}>
                    {subjectName}
                </Paper>
                <TimelineComponent data={getData(subjectName)} />
            </Container>
        </div>
    )
}

export default SubjectDetails
