import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from '../movie/Movie';
import './search.scss';
import Error from "../error/Error";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            movie: [],
            error: ""
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
                        movie: data
                    });
                    if (this.state.movie.Response === "False") {
                        this.setState({
                            error: "Movie not Found"
                        });
                    }
                }
            );
    }

    render() {
        let movieData = <Error error={this.state.error}/>;
        if (!this.state.error) {
            movieData = <Movie
                title={this.state.movie.Title}
                description={this.state.movie.Plot}
                poster={this.state.movie.Poster}
                rating={this.state.movie.imdbRating}
                runtime={this.state.movie.Runtime}
                director={this.state.movie.Director}/>;
        }

        return (
            <Container>
                <Row>
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
                </Row>
                <Row>
                    {movieData}
                </Row>
            </Container>
        );
    }
}

export default Search;