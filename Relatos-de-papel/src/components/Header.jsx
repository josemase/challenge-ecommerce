
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import { ImUserTie } from "react-icons/im";
import '../styles/Header.css';
import * as bootstrap from 'bootstrap';
import PurchaseCar from "./PurchaseCar.jsx";

import { SiBookstack } from "react-icons/si";
import {UserContext} from "../context/userContext.jsx";
import {useContext, useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
function Header({search}) {

    const navigate = useNavigate()
    const saludo = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        console.log(e.target.value);
        setSearchTerm(e.target.value);
        search(searchTerm);
    };

    useEffect(() => {
        if(saludo.user.name){
            const popoverTriggerEl = document.querySelector('[data-bs-toggle="popover"]');
            const popover = new bootstrap.Popover(popoverTriggerEl, {
                content: () => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'btn btn-danger';
                    button.textContent = 'Log out';
                    button.onclick = () => {
                        saludo.eliminateUser();
                        popover.hide();
                        navigate('/main');
                    };
                    return button;
                },
                html: true,
                container: 'body',
                placement: 'bottom'
            });
        }

    }, [saludo.user.name]);
    const userSelected = () => {
        if(!saludo.user.name){
            navigate('/user')
        }
    }

    return (

            <Navbar expand="lg" className="navbar w-100" >
                <Container>
                    <Navbar.Brand as={Link} to="/main"><SiBookstack className="navbar__icon"/>  Relatos de Papel </Navbar.Brand>
                    <Form inline="true">
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Buscar" className=" mr-sm-2 navbar__search-input " onChange={handleSearchChange} value={searchTerm}/>
                            </Col>

                            <Col >
                                    <PurchaseCar/>
                            </Col>
                            <Col>
                                <Button type="button" className="navbar__button--user" onClick={userSelected} data-bs-container="body" data-bs-toggle="popover">
                                    <ImUserTie className="navbar__button-icon"/>
                                    {saludo.user.name && <h6 className="saludador">Hola {saludo.user.name}</h6>}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>

    );
}

export default Header;