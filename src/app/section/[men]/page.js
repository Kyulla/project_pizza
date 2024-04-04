'use client'
import { useProject } from "@/app/context";
import { useEffect } from "react";
import { Form, Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

function Routing({ params: { men } }) {
    const { menu, cart, checkout, addToCart, emptyCart, removeFromCart, handleChangeFullName, handleChangeCardHolder,handleChangeCardNumber, handleChangeCardMonth, handleChangeCardYear, handleChangeCardCvv, handleChangeAddress, handleChangeCity, handleChangeZipcode } = useProject();
    const isCartRoute = men === 'Carrello';
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const date = new Date();
    const dateString = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

    useEffect(() => { }, [cart]);

    if (isCartRoute) {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="invoice-title">
                                    <h4 class="float-end font-size-15">Riepilogo ordine</h4>
                                    <div class="mb-4">
                                        <h2 class="mb-1 text-muted">Project Pizza</h2>
                                    </div>
                                    <div class="text-muted">
                                        <p class="mb-1">Via Progetto Pizza 32, Palermo 90148</p>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="text-muted">
                                            <h5 class="font-size-16 mb-3">Intestato a:</h5>
                                            <h5 class="font-size-15 mb-2"><input type="text" id="fullName" onChange={handleChangeFullName} placeholder="Nome e Cognome" style={{ width: '32.5ch' }} /></h5>
                                            <Form style={{ width: '22rem' }}>
                                                < Form.Group className="mb-4" >
                                                    <Form.Control placeholder="Indirizzo" type="text" id="Address" onChange={handleChangeAddress} required />
                                                </Form.Group >
                                                < Form.Group className="mb-4" >
                                                    <Form.Control placeholder="CAP" type="number" id="Zipcode" onChange={handleChangeZipcode} />
                                                </Form.Group >
                                                <label htmlFor="city">Seleziona una città:</label>
                                                <select id="city" name="city" onChange={handleChangeCity}>
                                                    <option value="Palermo">Palermo</option>
                                                    <option value="Agrigento">Agrigento</option>
                                                    <option value="Caltanissetta">Caltanissetta</option>
                                                    <option value="Catania">Catania</option>
                                                    <option value="Enna">Enna</option>
                                                    <option value="Messina">Messina</option>
                                                    <option value="Ragusa">Ragusa</option>
                                                    <option value="Siracusa">Siracusa</option>
                                                    <option value="Trapani">Trapani</option>
                                                </select>
                                            </Form>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="text-muted text-sm-end">
                                            <div class="mt-4">
                                                <h5 class="font-size-15 mb-1">Ordine data:</h5>
                                                <p>{dateString}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-2">
                                    <h5 class="font-size-15">Riepilogo ordine</h5>

                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap table-centered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Item</th>
                                                    <th>Prezzo</th>
                                                    <th>Quantità</th>
                                                    <th class="text-end">Totale</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <div>
                                                                <h5 class="text-truncate font-size-14 mb-1">{item.name}</h5>
                                                                <p class="text-muted mb-0">{item.description}</p>
                                                            </div>
                                                        </td>
                                                        <td>€ {item.price}</td>
                                                        <td>x{item.quantity} <button onClick={() => removeFromCart(item.name)} class="btn btn-danger">Rimuovi</button></td>
                                                        <td class="text-end">€ {item.price * item.quantity}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <th scope="row" colSpan="4" class="text-end">Totale parziale</th>
                                                    <td class="text-end">€ {totalPrice}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan="4" class="border-0 text-end">
                                                        Costi di consegna</th>
                                                    <td class="border-0 text-end">€ 5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colSpan="4" class="border-0 text-end">Totale</th>
                                                    <td class="border-0 text-end"><h4 class="m-0 fw-semibold">€ {totalPrice + 5}</h4></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-print-none mt-4">
                                        <input type="text" id="cardHolder" onChange={handleChangeCardHolder} placeholder="Nome e Cognome sulla carta" style={{ width: '25ch' }} />
                                        <input type="text" id="cardNumber" onChange={handleChangeCardNumber} placeholder="Numero della carta" style={{ width: '22ch' }} />
                                        <div>
                                            <input type="number" id="expiryMonth" onChange={handleChangeCardMonth} placeholder="Mese" style={{ width: '6ch' }} />
                                            <input type="number" id="expiryYear" onChange={handleChangeCardYear} placeholder="Anno" style={{ width: '7ch' }} />
                                        </div>
                                        <input type="number" id="cvv" onChange={handleChangeCardCvv} placeholder="CVV" style={{ width: '5ch' }} />

                                        <div class="float-end">
                                            <button onClick={() => emptyCart()} class="btn btn-danger">Svuota carrello</button>
                                            <a href="javascript:window.print()" class="btn btn-success me-1"><i class="fa fa-print"></i></a>
                                            <button onClick={() => checkout(dateString)} class="btn btn-primary w-md">Paga</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (menu == null) return <p>loading...</p>
    return (
        <>
            <div style={{ backgroundColor: 'lightblue' }}>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    {menu[0][men].map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={index}>
                            <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                    src={item.image}
                                    alt={item.name}
                                    width={'150'}
                                    height={'150'}
                                />
                                <div className="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <button onClick={() => addToCart(item.name, item.description, item.price)}>
                                        Aggiungi Prodotto al Carrello
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Routing;
