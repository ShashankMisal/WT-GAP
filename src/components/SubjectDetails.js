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
        switch (subjectName) {
            case 'WT': return WT;
                        
            case 'SPOS': return SPOS;
                        
            case 'ESIOT': return ESIOT;
                        
            case 'SMD': return SMD;
                    
            default: return []
        }
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
