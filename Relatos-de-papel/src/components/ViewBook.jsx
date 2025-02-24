import Image from 'react-bootstrap/Image';
import Header from "./Header.jsx";
import Container from "react-bootstrap/Container";
import '../styles/ViewBook.css';
import { BooksContext } from "../context/BookContext.jsx";
import {useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import AddPrice from "./AddPrice.jsx";

function ViewBook(){
    const {title} = useParams();
    const books = useContext(BooksContext)
    const book = books.find(book => book.titleSent === title);
    const navigate = useNavigate()

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
      <>
          <Header className="header-class"/>
          <Container>
              <Row>
                  <Col xs={12} md={4}>
                      <Image src={book.imageSent} className="container__image-book"/>
                      <ul>
                          <li>Author: {book.author}</li>
                          <li>Year: {book.year}</li>
                          <li>Genre: {book.genre}</li>
                          <li>Language: {book.language}</li>
                          <li>Edition: {book.edition}</li>
                          <li>Format: {book.format}</li>


                      </ul>
                  </Col>
                  <Col xs={12} md={8}>
                      <h1>{book.titleSent}</h1>
                      <p>{book.textSent}</p>
                        <AddPrice price={book.price}  tittle={book.titleSent}/>
                  </Col>
              </Row>
              <Button onClick={()=>navigate(`/Main`)}>volver</Button>
          </Container>
      </>
    );
}

export default ViewBook;