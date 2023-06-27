// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Card className="h-100">
            {movie.Featured ? (
                <Card.Header className="card-header">Featured</Card.Header>
            ) : (
                false
            )}
            <Card.Img variant="top" src={movie.ImagePath} alt={movie.Title} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button variant="primary">Open</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string,
        Description: PropTypes.string,
        Director: PropTypes.shape({
            Name: PropTypes.string,
            Bio: PropTypes.string,
            Birth: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.instanceOf(Date),
            ]),
        }),
        Genre: PropTypes.shape({
            Name: PropTypes.string,
            Description: PropTypes.string,
        }),
    }).isRequired,
};
