import { FaCcPaypal } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import {Alert, Button, ButtonGroup, Col, Collapse, Row, ToggleButton} from "react-bootstrap";
import PropTypes from "prop-types";
import { FaCcMastercard } from "react-icons/fa6";
import {useContext, useState} from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import '../styles/PaymentMethods.css';
import {useNavigate} from "react-router-dom";
import {PurchaseContext} from "../context/PurchaseContext.jsx";
import {UserContext} from "../context/userContext.jsx";


function PaymentMethods ({result}){
    const car=useContext(PurchaseContext);
    const currentUser = useContext(UserContext);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: <FaCcPaypal />, value: '1' },
        { name: <FaCcMastercard />, value: '2' },
        { name: <FaCcVisa />, value: '3' },
    ];
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const getIdBooKTittle= async (tittle) => {

        let url = new URL('http://localhost:8080/api/books');
        url.search = new URLSearchParams({
            title: tittle,
        }).toString();
        let response = await fetch(url.toString(), {
            method: 'GET',
        });
        let data = await response.json();
        return data.id;


    }


    const onClick = async () => {
        for (const purchase of car.purchases) {
            try {
                let url = 'http://localhost:8080/api/orders';
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        bookId: await getIdBooKTittle(purchase.title),
                        userId: currentUser.user.id,
                    })
                });

            } catch (e) {
                console.log("este es el error de crear orden"+e);
            }
        }
        setOpen(!open);
        setTimeout(() => {
            car.removeAllPurchases();
            navigate('/main')
        }, 10000)

    }



    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-grid gap-2 payment-methods__container">
                        <h5><Alert variant="warning">
                            Total a Pagar: ${result}
                        </Alert></h5>

                        <h3>Payment Methods</h3>

                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-warning' : 'outline-primary'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    style={{fontSize: '40px', padding: '10px 40px'}}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                        <br/>
                        <Collapse in={open}>
                            <div>
                                <Alert variant="success">
                                    <p>Su Orden fue creada exitosamente sera redireccionado en 10 segundos a la pagina principal</p>
                                </Alert>
                            </div>
                        </Collapse>
                        <Button variant="outline-success" size="lg" onClick={onClick}>Pagar</Button>

                    </div>
                </Col>
                <Col>
                    <h3>Payment Details</h3>
                    {radioValue !== '1' && (
                        <div className="payment-methods__container">
                            <br/>
                            <h5>Card Number</h5>
                            <Form.Control type="text" placeholder="Numero de tarjeta" style={{width: '100%'}}/>
                            <br/>
                            <h5>Card Holder</h5>
                            <Form.Control type="text" placeholder="Nombre de tarjeta" style={{width: '100%'}}/>
                            <br/>
                            <h5>Expiration Date</h5>
                            <Form.Control type="text" placeholder="Fecha de expiración" style={{width: '100%'}}/>
                            <br/>
                            <h5>CVV</h5>
                            <Form.Control type="text" placeholder="CVV" style={{width: '100%'}}/>
                        </div>)}
                    {radioValue === '1' && (
                        <div className="payment-methods__container">
                            <br/>
                            <h5>PayPal Email</h5>
                            <Form.Control type="email" placeholder="Email de PayPal" style={{width: '100%'}}/>
                            <br/>
                            <h5>PayPal Password</h5>
                            <Form.Control type="password" placeholder="Contraseña de PayPal" style={{width: '100%'}}/>
                        </div>
                    )}

                </Col>
            </Row>

        </Container>
    )
}

PaymentMethods.propTypes = {
    result: PropTypes.number.isRequired
};
export default PaymentMethods;