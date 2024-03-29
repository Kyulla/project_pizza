'use client'
import { useProject } from "@/app/context";
import { Image } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';

function Routing({ params: { men } }) {
    const { menu } = useProject();
    if (menu == null) return <p>loading...</p>
    console.log(menu[0][men])
    return (
        <>
            <div style={{ backgroundColor: 'lightblue' }}>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    {menu[0][men].map((pizza, index) => (
                        <Col lg={4} md={6} sm={12} key={index}>
                            <div className="card" style={{ width: '17rem', margin: '13px' }}>
                                <Image style={{ alignSelf: 'center', marginTop: '7px' }}
                                    src={pizza.image}
                                    alt={pizza.name}
                                    width={'150'}
                                    height={'150'}
                                />
                                <div className="card-body">
                                    <h5 class="card-title">{pizza.name}</h5>
                                    <p class="card-text">{pizza.description}</p>
                                    <a style={{ display: 'flex', justifyContent: 'center' }} href="#" class="btn btn-primary">Aggiungi al carrello</a>
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
