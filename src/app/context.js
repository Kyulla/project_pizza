"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CounterContext = createContext();

export const useProject = () => useContext(CounterContext);

export const ProjectProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                const response = await axios.get("/api/menuItems");
                setMenu(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("Errore con la chiamata get fetchMenuItems: ", error);
            }
        }

        fetchMenuItems();
    }, []);

    return (
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, menu }}>
            {children}
        </CounterContext.Provider>
    );
};

