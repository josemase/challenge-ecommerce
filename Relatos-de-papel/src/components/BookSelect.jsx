import {Card} from "react-bootstrap";
import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';


const BookSelect =({tittle,price,img,author}) => {
    return (
        <Card>
            <Card.Header as="h5">{tittle} -----------------------------${price}</Card.Header>
            <Card.Body>
                <Card.Title>Author: {author}</Card.Title>
                <Card.Text>
                    <Image src={img} thumbnail sizes="sm" />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
BookSelect.propTypes = {
    tittle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default BookSelect