import React,{useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const login=event => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) =>{

        })
        .catch((e) => alert(e.message))
    }
    const register=event => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{

        })
        .catch((e) => alert(e.message))
    }
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
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Policy, our Cookie Notice and our Interest-Based ads Notice. </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
