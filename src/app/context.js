"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CounterContext = createContext();

export const useProject = () => useContext(CounterContext);

export const ProjectProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const fetchMenuItems = async () => {
        try{
            const response = await axios.get("/api/items");
            setMenu(response.data);
        }
        catch(error){
            console.error("Errore con la chiamata get fetchMenuItems: ", error);
        }
    }

    return (
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, fetchMenuItems, menu }}>
            {children}
        </CounterContext.Provider>
    );
};

