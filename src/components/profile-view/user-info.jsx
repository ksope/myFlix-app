import React from "react";

export default function UserInfo({ name, email }) {
    return (
        <>
            <p>User: {name}</p>
            <p>Email: {email} </p>
        </>
    );
}
