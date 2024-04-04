"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useProject } from './context';
import { Image } from "react-bootstrap";

function MyModal() {
    const { handleCloseModal, showModal, setShowModal, detail } = useProject();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }} >
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Button variant="btn btn-primary w-25" onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                    <ul>
                        {detail.map((value) => (
                            <>
                                <div className="card" style={{ width: '17rem', margin: 'auto' }}>
                                    <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                        src={value.image}
                                        alt={value.name}
                                        width={'150'}
                                        height={'150'}
                                    />
                                    <div className="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-title">{value.description}</p>
                                        <p class="card-title">{value.price} euro</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </ul>
                </Modal>
            </div>
        </div>
    );
}

export default MyModal;
