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
    const [city, setCity] = useState("Palermo");
    const [zipcode, setZipcode] = useState("");
    const [user, setUser] = useState("")
    const [cart, setCart] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [detail, setDetail] = useState([])
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cardCvv, setCardCvv] = useState("");

    const addressRegex = /^[a-zA-Zà-úÀ-Ú]+\s[\w\s]+\d{1,5}$/;
    const zipcodeRegex = /^\d{5}$/;
    const cardHolderRegex = /^[a-zA-Z\s]{1,100}$/;
    const cardNumberRegex = /^\d{16}$/;
    const cardMonthRegex = /^(0[1-9]|1[0-2])$/;
    const cardYearRegex = /^\d{2}|\d{4}$/;
    const cardCvvRegex = /^\d{3,4}$/;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

    function removeFromCart(name){
        const itemIndex = cart.findIndex((item) => item.name === name);
        let updatedCart = cart;

        if(itemIndex >= 0){
            if(updatedCart[itemIndex].quantity === 1){
                updatedCart.splice(itemIndex, 1);
            }
            else{
                updatedCart[itemIndex].quantity -= 1;
            }
            setCart(updatedCart => [...updatedCart]);
        }
    }

    function checkout(){
        if(addressRegex.test(address) && zipcode > 0 && zipcodeRegex.test(zipcode)){
            if(cardHolderRegex.test(cardHolder) && cardNumberRegex.test(cardNumber) && cardMonthRegex.test(cardMonth) && cardYearRegex.test(cardYear) && cardCvvRegex.test(cardCvv)){
                if((cardYear > 23 && cardYear < 40) || (cardYear > 2023 && cardYear < 2040)){                
                    alert("Pagamento avvenuto con successo in "+address+" "+zipcode+" "+city+" "+cardHolder+" "+cardNumber+" "+cardMonth+" "+cardYear+" "+cardCvv);
                    setCart([]);
                }
                else{
                    alert("Pagamento non valido");
                }
            }
            else{
                alert("Pagamento non valido");
            }
        }
        else{
            alert("Indirizzo non valido");
        }
    }

    function emptyCart() {
        alert("Carrello svuotato");
        setCart([]);
    }

    function handleChangeCardHolder(event) {
        setCardHolder(event.target.value)
    }

    function handleChangeCardNumber(event) {
        setCardNumber(event.target.value)
    }

    function handleChangeCardMonth(event) {
        setCardMonth(event.target.value)
    }

    function handleChangeCardYear(event) {
        setCardYear(event.target.value)
    }

    function handleChangeCardCvv(event) {
        setCardCvv(event.target.value)
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeSurname(event) {
        setSurname(event.target.value)
    }

    function handleChangeAddress(event) {
        setAddress(event.target.value)
    }

    function handleChangeCity(event) {
        setCity(event.target.value)
    }

    function handleChangeZipcode(event) {
        setZipcode(event.target.value)
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
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, menu, isLogged, loginForm, removeFromCart, emptyCart, handleChangeUsername, handleChangeName, handleChangeSurname, handleChangeAddress, handleChangeCity, handleChangeZipcode, handleChangeCardHolder, handleChangeCardNumber, handleChangeCardMonth, handleChangeCardYear, handleChangeCardCvv, user, addToCart, cart, checkout, detailProduct, handleOpenModal, handleCloseModal, setShowModal, showModal, detail }}>
            {children}
        </CounterContext.Provider>
    );
};

