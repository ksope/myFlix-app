import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }, []);
    return <h2>Not Found, will take you to HomePage</h2>;
}
