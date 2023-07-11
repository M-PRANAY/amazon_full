import React, { useState } from "react";
import "./Login.css";
import { Link } from "@mui/material";
function Login() {
	const signIn = e => {
        e.preventDefault();
    };

    const register = e => {
        e.preventDefault();
    }

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login_logo"
					src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
					alt=""
				/>
			</Link>

			<div className="login_container">
				<h1>Sign In</h1>

				<form action="">
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login_signInButton" type="submit" onClick={signIn}>
						Sign In
					</button>
				</form>

				<p>
					By Signing-in you agree to Amazon's Conditions of Use & Sale.PLease
					see our Privacy Notice,our Cookies Notice and our Interest-Based Ads
				</p>
				<button className="login_registeButton" onClick={register}>Create New Account</button>
			</div>
		</div>
	);
}

export default Login;
