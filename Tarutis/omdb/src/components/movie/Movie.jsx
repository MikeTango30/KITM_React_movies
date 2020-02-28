import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './movie.scss';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            rating: this.props.rating,
            length: this.props.length,
            director: this.props.director
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Movie;