import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

// Here you import the PropTypes library
import PropTypes from "prop-types";

export const MovieView = ({ movies, user, token }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m._id === movieId);
    if (!movie) {
        return <div>Loading...</div>;
    }

    //use the navigate library to navigate to previous route
    const navigate = useNavigate();
    const returnBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    };

    const addMovieToFavorite = (user) => {
        if (user.FavouriteMovies && movie._id) {
            if (!user.FavouriteMovies.includes(movie._id)) {
                fetch(
                    `https://myflixapp-220423.herokuapp.com/user/${user.Username}/movies/${movieId}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(movie),
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        console.log("done");
                    })
                    .catch((e) => {
                        alert("oops, seems something went wrong");
                        console.log(e);
                    });
            } else {
                console.log("movie already on Favorite list");
 
            }
        }
    };

    const getSimilarMovies = (movies) => {
        // Display similar movies in an array
        let similarMovies = movies.filter(function (similarMovie) {
            return (
                similarMovie.Genre.Name === movie.Genre.Name &&
                similarMovie.Title !== movie.Title
            );
        });
        let displayMovies;

        if (similarMovies.length === 0) {
            displayMovies = (
                <Col className="mt-4">No similar movies in database.</Col>
            );
        } else {
            displayMovies = similarMovies.map(function (movie) {
                return (
                    <Col
                        className="mt-4"
                        key={movie._id}
                        xs={6}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <MovieCard movie={movie}></MovieCard>
                    </Col>
                );
            });
        }
    };

    return (
        <div>
            <div>
                <img
                    className="w-100"
                    src={movie.ImagePath}
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.Genre.Name}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director.Name}</span>
            </div>
            <Button onClick={returnBack} variant="secondary">
                Go Back
            </Button>
            <Button onClick={addMovieToFavorite} variant="secondary">
                Add to Favorites
            </Button>
            <Button onClick={getSimilarMovies} variant="secondary">
                Similar Movies
            </Button>
            <Link to={"/"}>
                <Button className="back-button">Return to Home</Button>
            </Link>
        </div>
    );
};

// Here is where we define all the props constraints for the MovieView
MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
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
    }),
    onBackClick: PropTypes.func
};
