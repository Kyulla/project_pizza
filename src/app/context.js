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
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [user, setUser] = useState("")
    const [cart, setCart] = useState([])

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
            address: address,
            city: city,
            zipcode: zipcode,
        }
        setUser(user)
    }

    function addToCart(name, description, price) {
        const existingItemIndex = cart.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const newItem = {
                name: name,
                description: description,
                price: price,
                quantity: 1
            };
            setCart(prevCart => [...prevCart, newItem]);
        }
    }

    function checkout() {
        alert("Pagamento avvenuto con successo");
        setCart([]);
    }

    function emptyCart() {
        alert("Carrello svuotato");
        setCart([]);
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

    function handleChangeAddress(event) {
        setAddress(event.target.value)
        console.log(event.target.value)
    }

    function handleChangeCity(event) {
        setCity(event.target.value)
        console.log(event.target.value)
    }

    function handleChangeZipcode(event) {
        setZipcode(event.target.value)
        console.log(event.target.value)
    }

    function detailProduct(name, description, price, image) {
        const obj = {
            name: name,
            description: description,
            price: price,
            image: image
        };

        const arr = [obj];

        setDetail(arr);
    }

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, menu, isLogged, loginForm, emptyCart, handleChangeUsername, handleChangeName, handleChangeSurname, handleChangeAddress, handleChangeCity, handleChangeZipcode, user, addToCart, cart, checkout, detailProduct, handleOpenModal, handleCloseModal }}>
            {children}
        </CounterContext.Provider>
    );
};

