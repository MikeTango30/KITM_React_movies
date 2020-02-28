import React, {Component} from 'react';
import Movie from '../movie/Movie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from '../search/Search';
import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    render() {

        const movieData = this.state.movies.map(movie => <Movie title={movie.Title} />);
        console.log(this.state.movies)
        return (
            <main>
                <Container>
                    <Row>
                        {movieData}
                    </Row>
                </Container>
            </main>
        );
    }

}

export default Main;