import React from 'react'
import subjects from '../data/subjects.json';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SubjectCard from './SubjectCard'
import { Link } from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkExternal from "@material-ui/core/Link";



function Homepage() {
    return (
        <div>
            <CssBaseline />
            <br></br>
            <Container maxWidth="sm">
                <LinkExternal href="https://www.linkedin.com/in/shashank-misal-8018b419a/" underline="none" color="inherit" >
                    <Typography component="h3"
                        variant="h3" align="center"
                        gutterBottom>
                        WT-GAP
                    </Typography>
                </LinkExternal>
                <br />
                <Typography component="h4"
                    variant="h4" align="center"
                    gutterBottom>
                    <MenuBookIcon />
                    {" "}SUBJECTS {"  "}
                    <MenuBookIcon />
                </Typography>
            </Container>
            <Container maxWidth="sm">
                {
                    subjects.map((subject, index) => {
                        return (
                            <Link to={subject.link} key={index}>
                                <SubjectCard details={subject} />
                            </Link>
                        )
                    })
                }
            </Container>

        </div>
    )
}

export default Homepage
