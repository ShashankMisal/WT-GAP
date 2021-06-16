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
    const [data,setData] = React.useState(WT)

    React.useEffect(()=>{
        if(subjectName === "WT" )
            setData(WT)
            else if(subjectName === "SPOS")
            setData(SPOS)
            else if(subjectName === "ESIOT")
            setData(ESIOT)
            else if(subjectName === "SMD")  
            setData(SMD)
    },[subjectName])

   

    return (
        <div>
            <Container maxWidth="sm">
                <Paper style={{ textAlign: "center", marginTop: "15px", padding: "10px" }}>
                    {subjectName}
                </Paper>
                <TimelineComponent data={data} />
            </Container>
        </div>
    )
}

export default SubjectDetails
