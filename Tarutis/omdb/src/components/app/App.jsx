import React from 'react';
import Search from '../search/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Main from '../main/Main';
import './app.scss';

function App() {
    return (
        <Container className="p-3">
            <Row>
                <Search/>
            </Row>
            <Row className='my-5'>
                <Main/>
            </Row>
        </Container>
    )
}

export default App;

