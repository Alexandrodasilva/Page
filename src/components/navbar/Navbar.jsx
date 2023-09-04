import React from "react";
import './Navbar.css';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-div">
                <ul className="ul-1">
                    <li>
                        <a href="https://github.com/Alexandrodasilva" target="_blank"><BsGithub className="icone"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/alexandro-silva/" target="_blank" ><BsLinkedin className="icone"/></a>
                    </li>
                </ul>
                <ul className="ul-2">
                    <li><a href="#" className="navbar-central">Alexandro Silva</a></li>
                </ul>
                <ul className="ul-3">
                    <li><a href="#" className="navbar-esq">Sobre</a></li>
                    <li><a href="#" className="navbar-esq">Projetos</a></li>
                    <li ><a href="#" className="navbar-esq">Blog</a></li>
                    <li ><a href="#" className="navbar-esq">Contatos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;