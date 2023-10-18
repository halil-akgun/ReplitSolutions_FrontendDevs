import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Content />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
