import Header from "./Header.jsx";
import Container from "react-bootstrap/Container";
import {useContext} from "react";
import {BooksContext} from "../context/BookContext.jsx";
import {PurchaseContext} from "../context/PurchaseContext.jsx";
import BookSelect from "./BookSelect.jsx";
import '../styles/ViewCheckOut.css';
import PaymentMethods from "./PaymentMethods.jsx";



const ViewCheckOut = () => {
    const books = useContext(BooksContext)
    const car= useContext(PurchaseContext)
    const listPurchases = car.purchases;
    const selectBooks = listPurchases.map((purchase) => {
        return books.find(book => book.titleSent === purchase.title);
    });
    const total = selectBooks.reduce((acc, book) => acc + book.price, 0);

    return (
        <>
            <Header/>
            <Container>
                <div>
                    <h1>Checkout</h1>
                    {selectBooks.map((book) => (
                        <div className="container__bookSelected" key={book.titleSent}>
                            <BookSelect key={book.titleSent} tittle={book.titleSent} price={book.price}
                                        img={book.imageSent}
                                        author={book.author}/>
                        </div>
                    ))}
                </div>
                <br/>
                <PaymentMethods result={total}/>
            </Container>
        </>

    )
}

export default ViewCheckOut