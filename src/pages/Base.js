// import {Link, Outlet} from "react-router-dom"; 
import { Link,useNavigate, Outlet } from "react-router-dom";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <Link to='/dashboard' class="nav-item">
                        <i>< FontAwesomeIcon icon={faChartArea}/></i>
                        Dashboard
                    </Link>
                    <Link to='/read' class="nav-item">
                        <i>< FontAwesomeIcon icon={faTableCells}/></i>
                        Read
                    </Link>
                    <Link to='/insert' class="nav-item">
                        <i>< FontAwesomeIcon icon={faSave}/></i>
                        Insert
                    </Link>
                    <Link to="#" onClick={handleLogout} class="nav-item" >
                        <i>< FontAwesomeIcon icon={faSignOut}/></i>
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