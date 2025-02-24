// Objective: Main page component for the app
import '../styles/Main.css'
import Header from "./Header.jsx";
import Book from "./Book.jsx";
import { BooksContext } from "../context/BookContext.jsx";
import {useContext, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";



const Main = () => {
    const books = useContext(BooksContext)
    const [filtered, setFiltered] = useState(books);
    const navigate = useNavigate();
    useEffect(() => {
        setFiltered(books);
    },[books]);

    const filterByYear = (year) => {
        if(year.target.value){
            setFiltered(books.filter(book => book.year === parseInt(year.target.value)));
        }else{
            setFiltered(books);
        }

    }
    const filterByFormat = (format) => {
        if(format.target.value){
            setFiltered(books.filter(book => book.format === format.target.value));
        }else{
            setFiltered(books);
        }
    }
    const filterByGenre = (genre) => {
        if(genre.target.value){
            setFiltered(books.filter(book => book.genre === genre.target.value));
        }else{
            setFiltered(books);
        }
    }
    const filterByLanguage = (language) => {
        if(language.target.value){
            setFiltered(books.filter(book => book.language === language.target.value));
        }else{
            setFiltered(books);
        }
    }
    const filterSearch = (search) => {
        if(search){
            setFiltered(books.filter(book => book.titleSent.toLowerCase().includes(search.toLowerCase())));
        }else{
            setFiltered(books);
        }
    }

    return (
        <>
        <Header search={filterSearch} />
            <Container>
                <Row>
                    <Col>
                        <h1 className={"main__title"}>Libros</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={"main__description"}>Bienvenido a Relatos de Papel, aquí encontrarás una selección de libros de diversos géneros literarios. ¡Disfruta de la lectura!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <select onChange={filterByYear} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="">buscar por año</option>
                            {[...new Set(books.map(book => book.year))].map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>
                    </Col>
                    <Col xs={12} md={3}>
                        <select onChange={filterByFormat} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="">buscar por formato</option>
                            {[...new Set(books.map((book) => book.format))].map((format, index) => (
                                <option key={index} value={format}>{format}</option>
                            ))}
                        </select>
                    </Col>
                    <Col xs={12} md={3}>
                        <select onChange={filterByGenre} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="">buscar por genero</option>
                            {[...new Set(books.map(book => book.genre))].map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </Col>
                    <Col xs={12} md={3}>
                        <select onChange={filterByLanguage} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="">buscar por idioma</option>
                            {[...new Set(books.map(book => book.language))].map((language, index) => (
                                <option key={index} value={language}>{language}</option>
                            ))}
                        </select>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <hr className={"main__line"}/>
                    </Col>
                </Row>


                <Row>
                    {filtered.map((book, index) => (
                            <Col key={index} xs={12} md={4}>
                            <Book
                                imageSent={book.imageSent}
                                titleSent={book.titleSent}
                                shortDescription={book.shortDescription}
                            />
                            </Col>
                        ))}
                </Row>
                <Row>
                    <Col>
                        <hr className={"main__line"}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button onClick={()=>{navigate('/Reports')}}>Ver Reportes</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default Main;