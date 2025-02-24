import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import usePreparedata from "../hooks/usePreparedata.jsx";
import {PurchaseContext} from "../context/PurchaseContext.jsx";
import BookAdded from "./BookAdded.jsx";




const AddPrice = ({tittle,price}) => {
    const purchase = useContext(PurchaseContext);
    const [myPrice] = useState(price);
    const [myTittle] = useState(tittle);
    const formData = usePreparedata(myTittle,myPrice); //mi Hook personalizado utilizado para preparar los datos por este componente
    const [added, setAdded]=useState(false);
    const onclick= () => {
        purchase.addPurchase(formData);
        setAdded(true);
    }
    return (

        <div className="container__buy--price d-grid gap-2">
            <h3>Price ${myPrice}</h3>
            {added && <BookAdded/>}
            <Button variant="success" size="lg" onClick={onclick}>Añadir al carrito</Button>

        </div>


    );

}


AddPrice.propTypes = {
    tittle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
export default AddPrice;