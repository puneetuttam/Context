import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <>
            <h1>Login</h1>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default Login;
