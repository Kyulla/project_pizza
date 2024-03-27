"use client"
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useProject = () => useContext(CounterContext);

export const ProjectProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </CounterContext.Provider>
    );
};

