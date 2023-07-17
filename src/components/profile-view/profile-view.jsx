import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./profile-view.scss";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";
import DeleteUser from "./delete-user";

export default function ProfileView({ movies, movieUser, movieToken, onLoggedOut }) {


    return (
        <div>
            <UserInfo name={movieUser.Username} email={movieUser.Email} />
            <FavoriteMovies
                user={movieUser}
                token={movieToken}
                movies={movies}
            />
            <UpdateUser updateTheUser={movieUser} updateTheToken={movieToken} />
            <DeleteUser deleteuser={movieUser} deleteTheToken={movieToken} />
            <Button
                className="btn-secondary"
                as={Link}
                to={`/`}
                variant="secondary"
            >
                Back
            </Button>
        </div>
    );
}
