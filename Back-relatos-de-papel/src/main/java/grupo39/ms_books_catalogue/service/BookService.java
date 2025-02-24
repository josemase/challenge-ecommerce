package grupo39.ms_books_catalogue.service;

import grupo39.ms_books_catalogue.model.Book;
import grupo39.ms_books_catalogue.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Obtener todos los libros
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    // Obtener un libro por su ID
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    // Crear un nuevo libro
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    // Actualizar un libro existente
    public Book updateBook(Long id, Book bookDetails) {
        if (bookRepository.existsById(id)) {
            bookDetails.setId(id);
            return bookRepository.save(bookDetails);
        }
        return null;
    }
    // Eliminar un libro
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    // Buscar un libro por su título
    public Book getBookByTitle(String title) {
        return bookRepository.findBytitleSent(title);
    }




}
