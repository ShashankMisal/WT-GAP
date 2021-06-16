import React from 'react'
import Container from '@material-ui/core/Container';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SubjectDetails from './components/SubjectDetails';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
       
          <Route exact path="/" >
            <Homepage />
          </Route>

          <Route path="/t/:subjectName" >
            <SubjectDetails />
          </Route>

        
      </Container>
    </div>
  );
}

export default App;

