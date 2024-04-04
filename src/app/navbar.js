"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
import Link from 'next/link';
const Navbar = () => {
    const { toggleMenu } = useProject();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid ">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <i onClick={toggleMenu} className="fas fa-bars text-white"></i>
                    <Link className="text-white" href="../">Home</Link>
                    <Link className="fa fa-shopping-cart text-white " href="/section/Carrello"></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
