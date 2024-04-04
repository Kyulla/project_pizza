"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
import { Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import MyModal from './detailProduct';
const Home = () => {

    const { menu, addToCart, detailProduct, handleOpenModal } = useProject();
    if (menu == null) return <p>loading...</p>
    return (
        <>
            <MyModal />
            <Row style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightblue' }}>
                {menu.map((item, index) => (
                    <>
                        {item.Antipasti.map((value, j) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text" onClick={() => {
                                            handleOpenModal();
                                            detailProduct(value.name, value.description, value.price, value.image)
                                        }}>Leggi di più</p>
                                        <button onClick={() => addToCart(value.name, value.description, value.price)}>
                                            Aggiungi Prodotto al Carrello
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                        {item.Bibite.map((value, j) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">Leggi di più</p>
                                        <button onClick={() => addToCart(value.name, value.description, value.price)}>
                                            Aggiungi Prodotto al Carrello
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                        {item.Desert.map((value, j) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">Leggi di più</p>
                                        <button onClick={() => addToCart(value.name, value.description, value.price)}>
                                            Aggiungi Prodotto al Carrello
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                        {item.Panini.map((value, j) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">Leggi di più</p>
                                        <button onClick={() => addToCart(value.name, value.description, value.price)}>
                                            Aggiungi Prodotto al Carrello
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                        {item.Pizze.map((value, j) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">Leggi di più</p>
                                        <button onClick={() => addToCart(value.name, value.description, value.price)}>
                                            Aggiungi Prodotto al Carrello
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                ))}
            </Row>
        </>

    )
}

export default Home;