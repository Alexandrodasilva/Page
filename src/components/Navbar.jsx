import React from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { FaLinkedin} from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';
import './Navbar.css';
const Navbar = () => {

    return(
        <div className="navbar-body">
            <div className="navbar">
                <ul className="ul">
                    <li className="p-4">Home</li>
                    <li className="p-4">projects</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contacts</li>
                </ul>
            </div>
            <div className="navbar">
                <h1 className='text-h1'>Alexandro Silva</h1>
            </div>
            <div className="navbar">
                <ul className="ul">
                    <li className="li-emotin">
                        < FaLinkedin/>  
                    </li>
                    <li className="p-4">
                        <BsGithub/>
                    </li>
                </ul>
            </div>
            <div className="navbar2">
                <AiOutlineMenu/>
            </div>
            <div className="navbar2">
                <AiOutlineClose/>
            </div>
        </div>
    );
}

export default Navbar;