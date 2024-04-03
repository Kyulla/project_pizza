'use client'
import { useProject } from "@/app/context";
import { Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

function Routing({ params: { men } }) {
    const { menu, cart, user, checkout, addToCart, emptyCart } = useProject();
    const isCartRoute = men === 'Carrello';
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const date = new Date();
    const dateString = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

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
                                            <h5 class="font-size-15 mb-2">{user.name} {user.surname}</h5>
                                            <p class="mb-1">{user.address}, {user.city} {user.zipcode}</p>
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
                                                {cart.map((item, index) =>(
                                                    <tr>
                                                        <th scope="row">{index+1}</th>
                                                        <td>
                                                            <div>
                                                                <h5 class="text-truncate font-size-14 mb-1">{item.name}</h5>
                                                                <p class="text-muted mb-0">{item.description}</p>
                                                            </div>
                                                        </td>
                                                        <td>€ {item.price}</td>
                                                        <td>x{item.quantity}</td>
                                                        <td class="text-end">€ {item.price * item.quantity}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <th scope="row" colspan="4" class="text-end">Totale parziale</th>
                                                    <td class="text-end">€ {totalPrice}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">
                                                        Costi di consegna</th>
                                                    <td class="border-0 text-end">€ 5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" colspan="4" class="border-0 text-end">Totale</th>
                                                    <td class="border-0 text-end"><h4 class="m-0 fw-semibold">€ {totalPrice + 5}</h4></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-print-none mt-4">
                                        <div class="float-end">
                                            <button onClick={() => emptyCart()} class="btn btn-danger">Svuota carrello</button>
                                            <a href="javascript:window.print()" class="btn btn-success me-1"><i class="fa fa-print"></i></a>
                                            <button onClick={() => checkout()} class="btn btn-primary w-md">Paga</button>
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
