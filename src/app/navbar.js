"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
const Navbar = () => {
    const { toggleMenu } = useProject();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <i onClick={toggleMenu} className="fas fa-bars text-white"></i>
                    <div className="text-white">Home</div>
                    <i className="fa fa-shopping-cart text-white "></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
