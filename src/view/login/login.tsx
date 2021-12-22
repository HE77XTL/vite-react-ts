import React from 'react';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            Login
            <div>
                <Link to="/home">To Home</Link>
            </div>
        </div>
    )
}

export default Login
