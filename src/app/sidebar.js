"use client"
import React, { useState } from 'react';
import '../../App.css';
import { useProject } from './context';

function Sidebar() {
    const { isMenuOpen } = useProject();

    return (
        <>

            <div id="wrapper">
                <div id="sidebar-wrapper" className={`sidebar-wrapper ${isMenuOpen ? 'active' : 'hidden'}`}>
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">
                                Menù
                            </a>
                        </li>
                        <li>
                            <a href="#">Pizze</a>
                        </li>
                        <li>
                            <a href="#">Panini</a>
                        </li>
                        <li>
                            <a href="#">Antipasti</a>
                        </li>
                        <li>
                            <a href="#">Desert</a>
                        </li>
                        <li>
                            <a href="#">Bibite</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );

}

export default Sidebar;
