"use client"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProject } from './context';
import { Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
const Home = () => {

    const { menu, addTocart } = useProject();
    if (menu == null) return <p>loading...</p>
    return (
        <>
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
                                        <p class="card-text">Leggi di più</p>
                                        <button onClick={() => addTocart(value.name, value.description, value.price)}>
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
                                        <a style={{ display: 'flex', justifyContent: 'center' }} href="#" class="btn btn-primary">Aggiungi al carrello</a>
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
                                        <a style={{ display: 'flex', justifyContent: 'center' }} href="#" class="btn btn-primary">Aggiungi al carrello</a>
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
                                        <a style={{ display: 'flex', justifyContent: 'center' }} href="#" class="btn btn-primary">Aggiungi al carrello</a>
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
                                        <a style={{ display: 'flex', justifyContent: 'center' }} href="#" class="btn btn-primary">Aggiungi al carrello</a>
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