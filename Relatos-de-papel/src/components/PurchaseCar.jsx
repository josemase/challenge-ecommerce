import {Button, Offcanvas} from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import {useContext,  useState} from "react";
import '../styles/purchaseCar.css';
import {PurchaseContext} from "../context/PurchaseContext.jsx";
import {useNavigate} from "react-router-dom";

function PurchaseCar() {
    const [show, setShow] = useState(false);
    const Purchases = useContext(PurchaseContext);
    const listPurchases = Purchases.purchases;
    const handleClose = () => setShow(false);
    const navigate = useNavigate();

    const handleShow = () => {
        setShow(true);

    }


    return (
        <>
        <Button className="navbar__button--user" onClick={handleShow}><FaCartShopping className="navbar__button-icon" /></Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="purchase-car__offcanvas" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {listPurchases.length === 0 ? (
                        <p>No hay Libros en el carrito</p>
                    ) : (
                    <ul>
                        {listPurchases.map((purchase) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                    <li className="purchase-car__list-item">{purchase.title} ------------- ${purchase.price}
                                        <Button variant="danger" size="sm" onClick={() => Purchases.removePurchase(purchase.title)}>Eliminar</Button></li>

                            )
                        })}
                    </ul>
                    )}
                    {listPurchases.length > 0 && (
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg" onClick={() => navigate("/compra")}>
                                Ir a pagina de compra
                            </Button>
                        </div>

                            )}
                        </Offcanvas.Body>
                        </Offcanvas>
                        </>
                        )
                    }

                    export default PurchaseCar;