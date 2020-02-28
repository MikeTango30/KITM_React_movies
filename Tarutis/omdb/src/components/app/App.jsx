import React from 'react';
import Search from '../search/Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './app.scss';
//
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

function App() {
    return (
        <Container className="p-3">
            <Row>
                <Search/>
            </Row>
        </Container>
    )
}

export default App;

