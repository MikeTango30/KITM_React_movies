import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './movie.scss';

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = "";
        if (this.props.title) {
            result = <Row>
                <Col className="col-4">
                    <img src={this.props.poster} alt={this.props.title}/>
                </Col>
                <Col>
                    <Row>
                        <h1>{this.props.title}</h1>
                    </Row>
                    <Row>
                        <p>Plot: <span>{this.props.description}</span></p>
                    </Row>
                    <Row>
                        <p>IMDB rating: <span>{this.props.rating}</span></p>
                    </Row>
                    <Row>
                        <p>Runtime: <span>{this.props.runtime}</span></p>
                    </Row>
                    <Row>
                        <p>Director: <span>{this.props.director}</span></p>
                    </Row>
                </Col>
            </Row>;
        }

        return (
            <Container className="my-5">
                {result}
            </Container>
        )
    }
}

export default Movie;