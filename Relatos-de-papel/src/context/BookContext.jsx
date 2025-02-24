import  { createContext, useState } from 'react';
import cincuentaImage from '../assets/cincuenta.png';
import cienAnosImage from '../assets/cienAños.png';
import orgulloPrejuicioImage from '../assets/OYP.png';
import principitoImage from '../assets/Principito.png';
import senorAnillosImage from '../assets/SA.png';
import quijoteImage from '../assets/Quijote.png';
import harryPotterImage from '../assets/Harry.png';
import { useEffect } from 'react';

export const BooksContext = createContext();

// eslint-disable-next-line react/prop-types
export const BooksProvider = ({ children }) => {


    const [booksData, setBooksData] = useState([]);
    const bookImages = {
        "Cincuenta sombras de Grey": cincuentaImage,
        "Cien años de soledad": cienAnosImage,
        "Orgullo y prejuicio": orgulloPrejuicioImage,
        "El Principito": principitoImage,
        "El señor de los anillos": senorAnillosImage,
        "Don Quijote de la Mancha": quijoteImage,
        "Harry Potter": harryPotterImage
    };
    async function getBooks() {
        let url = 'http://localhost:8080/api/books';
        let fetchResponse = await fetch(url,{method: 'GET'});
        let jsonResponse = await fetchResponse.json();
        const books = jsonResponse.map(book => ({
            imageSent: bookImages[book.titleSent],
            titleSent: book.titleSent,
            format: book.format,
            author: book.author,
            year: book.year,
            language: book.language,
            edition: book.edition,
            textSent: book.textSent,
            genre: book.genre,
            shortDescription: book.shortDescription,
            price: book.price
        }));
        setBooksData(books);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <BooksContext.Provider value={booksData}>
            {children}
        </BooksContext.Provider>
    );
};