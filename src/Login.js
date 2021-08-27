import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"

function Login() {
    return (
        <div className="login">
            <Link to ="/">
                <img 
                    className="login__logo"
                    src="https://lh3.googleusercontent.com/proxy/g-uh59HKBOFD3LAUW2_nPUW3SAAkao00NDc_crFGPySraZ4NokOcsgjdMGXUWmZeGqvJEtPd4lcpNvCpjhOZ49Ee-9NxJzkxghKFPGU38qIvlGmlFHKs83i0By4weCZZBvjuklIfQtq5rpj4BKFhzMpycEuh"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="text" />
                    <button className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Policy, our Cookie Notice and our Interest-Based ads Notice. </p>
                <button className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
