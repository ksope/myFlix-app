import React from "react";
import { Link } from "react-router-dom";

export default function FavoriteMovies({ favuser, favtoken, movieList }) {
    const favoriteMovieList = movieList.filter((m) =>
        favuser.FavoriteMovies.includes(m._id)
    );

    const removeFav = (id) => {
        fetch(
            `https://myflixapp-220423.herokuapp.com/user/${favuser.Username}/movies/${id}`,
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
                alert(`${data.Title} has been deleted from the favorite list`);
            })
            .catch((e) => {
                alert("oops, seems something went wrong");
                console.log(e);
            });
    };
    return (
        <div>
            <h2>Favourite Movies</h2>
            {favoriteMovieList.map((movie) => {
                return (
                    <div key={movie._id}>
                        <img src={movie.ImagePath} alt={movie.Title} />
                        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
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
