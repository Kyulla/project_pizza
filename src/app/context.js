"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { POST } from './api/addUser/route';
const CounterContext = createContext();

export const useProject = () => useContext(CounterContext);

export const ProjectProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState();
    const [isLogged, setLogin] = useState(false)
    const [stateUsername, setUsername] = useState("")
    const [stateName, setName] = useState("")
    const [stateSurname, setSurname] = useState("")
    const [user, setUser] = useState("")
    const [carrello, setCarrello] = useState("")

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

    function loginForm() {
        setLogin(!isLogged)
        const user = {
            username: stateUsername,
            name: stateName,
            surname: stateSurname,
        }
        setUser(user)
    }

    function addTocart(name, description, price) {
        const user = {
            username: stateUsername,
            name: stateName,
            surname: stateSurname,
            orders_history: [
                {
                    items: [
                        {
                            name: name,
                            description: description,
                            price: price
                        }
                    ]
                }
            ]
        }
        POST(user)
        setCarrello(user)
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value)
        console.log(event.target.value)
    }

    function handleChangeName(event) {
        setName(event.target.value)
        console.log(event.target.value)
    }

    function handleChangeSurname(event) {
        setSurname(event.target.value)
        console.log(event.target.value)
    }

    return (
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, menu, isLogged, loginForm, handleChangeUsername, handleChangeName, handleChangeSurname, user, addTocart, carrello }}>
            {children}
        </CounterContext.Provider>
    );
};

