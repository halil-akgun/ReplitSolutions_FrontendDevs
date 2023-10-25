import { Col, Container, Row } from 'reactstrap';
import './App.css';
import NoteForm from './NoteForm';
import { useState } from 'react';
import Notes from './Notes';

function App() {

  const [refreshToken, setRefreshToken] = useState(null);

  return (
    <Container className='mt-5'>
      <h1 className='text-center mb-5'>Todo App</h1>
      <Row>
        <Col md={3} className='mb-5'>
          <NoteForm setRefreshToken={setRefreshToken} />
        </Col>
        <Col md={9}>
          <Notes refreshToken={refreshToken} setRefreshToken={setRefreshToken} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

