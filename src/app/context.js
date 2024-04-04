"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { POST as postOrder } from './api/addOrder/route';
const CounterContext = createContext();

export const useProject = () => useContext(CounterContext);

export const ProjectProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState();
    const [fullName, setFullName] = useState("")
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
    const fullNameRegex = /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)?\s[a-zA-Zà-úÀ-Ú]+$/;

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

    function checkout(date){
        if(fullNameRegex.test(fullName)){
            if(addressRegex.test(address) && zipcode > 0 && zipcodeRegex.test(zipcode)){
                if(cardHolderRegex.test(cardHolder) && cardNumberRegex.test(cardNumber) && cardMonthRegex.test(cardMonth) && cardYearRegex.test(cardYear) && cardCvvRegex.test(cardCvv)){
                    if((cardYear > 23 && cardYear < 40) || (cardYear > 2023 && cardYear < 2040)){    
                        if(cart.length !== 0){            
                            alert("Pagamento avvenuto con successo.");
                            postOrder(newOrder(date));
                            setCart([]);
                        }
                        else{
                            alert("Carrello vuoto.");
                        }
                    }
                }
                else{
                    alert("Metodo di pagamento non valido.");
                }
            }
            else{
                alert("Indirizzo non valido.");
            }
        }
        else{
            alert("Nome completo non valido.");
        }
    }

    function emptyCart() {
        if(cart.length !== 0){
            alert("Carrello svuotato.");
            setCart([]);
        }
    }

    function newOrder(date){
        const order = {
            fullName: fullName,
            address: address,
            city: city,
            zipcode, zipcode,
            date: date,
            cardInfo:{
                cardHolder: cardHolder,
                cardNumber: cardNumber.toString().slice(-4)
            },
            orderedItems: cart
        };
        return order;
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

    function handleChangeFullName(event) {
        setFullName(event.target.value)
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
        <CounterContext.Provider value={{ isMenuOpen, toggleMenu, menu, removeFromCart, emptyCart, handleChangeFullName, handleChangeAddress, handleChangeCity, handleChangeZipcode, handleChangeCardHolder, handleChangeCardNumber, handleChangeCardMonth, handleChangeCardYear, handleChangeCardCvv, user, addToCart, cart, checkout, detailProduct, handleOpenModal, handleCloseModal, setShowModal, showModal, detail }}>
            {children}
        </CounterContext.Provider>
    );
};

