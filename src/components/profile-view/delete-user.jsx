//delete a user's account and details from the system
import React from "react";
import Button from "react-bootstrap/Button";

export default function DeleteUser({
    deleteuser,
    setDeleteuser,
    deletedtoken,
    setDeletedtoken,
}) {
    const deleteAccount = () => {
        fetch(
            `https://myflixapp-220423.herokuapp.com/user/${deleteuser.Username}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${deletedtoken}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDeleteuser(null);
                setDeletedtoken(null);
                localStorage.clear();
            })
            .catch((e) => {
                alert("oops, seems something went wrong");
                console.log(e);
            });
    };

    return (
        <>
            <Button onClick={deleteAccount} type="button" variant="danger">
                Delete account
            </Button>
        </>
    );
}
