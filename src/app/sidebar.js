"use client"
import React, { useState } from 'react';
import '../../App.css';
import { useProject } from './context';
import Link from 'next/link'

function Sidebar() {
    const { isMenuOpen } = useProject();

    return (
        <>
            <div id="wrapper">
                <div id="sidebar-wrapper" className={`sidebar-wrapper ${isMenuOpen ? 'active' : 'hidden'}`}>
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <Link href="../">Home</Link>
                        </li>
                        <li>
                            <Link href="/section/Pizze">Pizze</Link>
                        </li>
                        <li>
                            <Link href="/section/Panini">Panini</Link>
                        </li>
                        <li>
                            <Link href="/section/Antipasti">Antipasti</Link>
                        </li>
                        <li>
                            <Link href="/section/Desert">Desert</Link>
                        </li>
                        <li>
                            <Link href="/section/Bibite">Bibite</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );

}

export default Sidebar;
