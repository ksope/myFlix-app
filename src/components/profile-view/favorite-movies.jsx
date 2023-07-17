import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";

export default function FavoriteMovies({ user, token, movies }) {
    let favoriteMovieList;
    user.FavouriteMovies ? (
        (favoriteMovieList = movies.filter((m) =>
            user.FavouriteMovies.includes(m._id)
        ))
    ) : (
        <Col className="mt-4">You have not added any movies yet.</Col>
    );

    favoriteMovieList &&
        favoriteMovieList.map(function (movie) {
            return (
                <Col
                    className="mt-4"
                    key={movie._id}
                    xs={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <MovieCard movie={movie} />
                </Col>
            );
        });

    if (favoriteMovieList !== 0) {
        const removeFav = (id) => {
            fetch(
                `https://myflixapp-220423.herokuapp.com/user/${user.Username}/movies/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${favtoken}`,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    alert(
                        `${data.Title} has been deleted from the favorite list`
                    );
                })
                .catch((e) => {
                    alert("oops, seems something went wrong");
                    console.log(e);
                });
        };
    }

    return (
        <div>
            <h2>Favourite Movies</h2>
            {favoriteMovieList &&
                favoriteMovieList.map((movie) => {
                    return (
                        <div key={movie._id}>
                            <img src={movie.ImagePath} alt={movie.Title} />
                            <Link
                                to={`/movies/${encodeURIComponent(movie._id)}`}
                            >
                                <h4>{movie.Title}</h4>
                            </Link>
                            <button
                                variant="secondary"
                                onClick={() => removeFav(movie._id)}
                            >
                                Remove from favorite list
                            </button>
                        </div>
                    );
                })}
        </div>
    );
}
