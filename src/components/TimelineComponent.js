import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles({
    paper: {
        textAlign: "center",
        padding: "8px 1px",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(0.97)",
        },
    }
});



function TimelineComponent({ data, subjectName }) {
    const classes = useStyles();

    return (
        <div>
            <Timeline align="alternate">
                {
                    data.map((value, index) => {
                        return (

                            <TimelineItem key={value.id}>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    {index !== data.length - 1 ? <TimelineConnector /> : ""}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Link href={value.link} target="_blank" underline="none">
                                        <Paper elevation={3} className={classes.paper}>
                                            {value.title}
                                        </Paper>
                                    </Link>
                                </TimelineContent>

                            </TimelineItem>
                        )
                    })
                }
            </Timeline>



        </div>
    )
}

export default TimelineComponent
