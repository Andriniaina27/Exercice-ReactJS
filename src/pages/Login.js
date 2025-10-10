import { Link, Outlet } from "react-router-dom";
// import {useState} from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username === "Andriniaina" && password === "luca2710"){
            localStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
        }else{
            setError("Echec d'authentification")
        }
    }
    return (
        <>
        <div class="login">
            <div class="container">
                <div class="heading">
                    <FontAwesomeIcon icon={ faUser }/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, neque?</p>
                </div>
                <form action="" onSubmit={handleSubmit} method="post">
                    <div class="input-form">
                        <i class="fa fa-envelope"></i>
                        <input type="text" placeholder="Adresse email..." value={username} onChange={(e) =>setUsername(e.target.value)}/>
                    </div>
                    <div class="input-form">
                        <i class="fa fa-key"></i>
                        <input type="password" placeholder="Mot de passe..."  value={password} onChange={(e) =>setPassword(e.target.value)}/>
                    </div>
                    <div class="btn-form">
                        <button type="submit">Se connecter</button>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    {error && <p>{error}</p>}
                    
                </form>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
export default Login;