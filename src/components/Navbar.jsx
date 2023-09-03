import React from "react";
import './Navbar.css';
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-div">
                <ul className="ul-1">
                    <li>github</li>
                    <li>linkedin</li>
                </ul>
                <ul className="ul-2">
                    <li>Alexandro Silva</li>
                </ul>
                <ul className="ul-3">
                    <li>Projetos</li>
                    <li>Blog</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;