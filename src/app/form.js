import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useProject } from './context';
const FormLogin = () => {
    const { loginForm, handleChangeUsername, handleChangeName, handleChangeSurname, handleChangeAddress, handleChangeCity, handleChangeZipcode } = useProject();
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Form style={{
                width: '22rem', marginTop: '90px'
            }}>
                < Form.Group className="mb-4" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" id="Username" onChange={handleChangeUsername} />
                </Form.Group >
                < Form.Group className="mb-4" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="Name" onChange={handleChangeName} />
                </Form.Group >
                < Form.Group className="mb-4" >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" id="Surname" onChange={handleChangeSurname} />
                </Form.Group >
                < Form.Group className="mb-4" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" id="Address" onChange={handleChangeAddress} />
                </Form.Group >
                < Form.Group className="mb-4" >
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" id="City" onChange={handleChangeCity} />
                </Form.Group >
                < Form.Group className="mb-4" >
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control type="number" id="Zipcode" onChange={handleChangeZipcode} />
                </Form.Group >
                < Button variant="primary" block onClick={loginForm} >
                    Invia
                </Button >
            </Form >
        </div>
    );
}

export default FormLogin