import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./profile-view.scss";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";
import DeleteUser from "./delete-user";

export default function ProfileView({
    movies,
    profileuser,
    setProfileuser,
    profiletoken,
    setProfiletoken,
    onLoggedOut,
}) {
    return (
        <div>
            <UserInfo name={profileuser.Username} email={profileuser.Email} />
            <FavoriteMovies
                movieList={movies}
                favuser={profileuser}
                favtoken={profiletoken}
            />
            <UpdateUser
                updateuser={profileuser}
                setUpdateuser={setProfileuser}
                updatetoken={profiletoken}
                setUpdatetoken={setProfiletoken}
            />
            <DeleteUser
                deleteuser={profileuser}
                setDeleteuser={setProfileuser}
                deletedtoken={profiletoken}
                setDeletedtoken={setProfiletoken}
            />
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
