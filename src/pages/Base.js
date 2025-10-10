// import {Link, Outlet} from "react-router-dom"; 
import { Link,useNavigate, Outlet } from "react-router-dom";
// import React from "react";
const Base = () =>{
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem("isLoggedIn");
        navigate("/")
    }
    return(
        <>
        <div class="sidebar" id="sidebar">
            <nav>
                <div class="heading">
                    <h3>Admin</h3>
                </div>
                <div class="navlink">
                    <Link to='/insert' class="nav-item">
                        <i class="fa fa-user"></i>
                        Dashboard
                    </Link>
                    <Link to='/read' class="nav-item">
                        <i class="fa fa-user"></i>
                        Read
                    </Link>
                    <Link to='/insert' class="nav-item">
                        <i class="fa fa-user"></i>
                        Insert
                    </Link>
                    <Link to="#" onClick={handleLogout} class="nav-item" >
                        <i class="fa fa-user"></i>
                        Logout
                    </Link>
                </div>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}
export default Base