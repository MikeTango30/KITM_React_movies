import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './search.scss';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            movies: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("https://www.omdbapi.com/?apikey=e4db3ced&t=" + this.state.search)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        movies: data
                    });
                    // console.log(this.state.movies) // yra
                }
            );
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSearch">
                    <Form.Label>Search Movie</Form.Label>
                    <Form.Control type="text" placeholder="Search..." value={this.state.search}
                                  onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                        Enter movie title.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Go!
                </Button>
            </Form>
        );
    }
}

export default Search;