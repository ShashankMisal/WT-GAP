import React from 'react'
import subjects from '../data/subjects.json';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SubjectCard from './SubjectCard'
import { Link , useRouteMatch} from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExternalLink from '@material-ui/core/Link'


function Homepage() {
    const {url} = useRouteMatch();
    return (
        <div>
            <CssBaseline />
            <br></br>
            <Container maxWidth="sm">
            <ExternalLink href="https://www.linkedin.com/in/shashank-misal-8018b419a/" color="inherit" underline="none">
                    <Typography component="h3"
                        variant="h3" align="center"
                        gutterBottom>
                        WT-GAP
                    </Typography>
                </ExternalLink>
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
                            <Link to={`/WT-GAP/${subject.title}`} key={index}>
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
