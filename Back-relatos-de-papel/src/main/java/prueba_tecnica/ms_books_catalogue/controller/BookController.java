package prueba_tecnica.ms_books_catalogue.controller;

import prueba_tecnica.ms_books_catalogue.model.Book;
import prueba_tecnica.ms_books_catalogue.service.BookService;
import lombok.RequiredArgsConstructor;  // Lombok para generar el constructor con todos los parámetros finales.
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.math.BigDecimal; // Importar para manejar decimales

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:5173") // URL de ms-books-payments
@RequiredArgsConstructor // Lombok genera el constructor con todos los parámetros necesarios
public class BookController {

    private final BookService bookService; // Inyección de dependencia automática

    // Obtener todos los libros
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAllBooks();
    }

    // Obtener un libro por su ID
    @GetMapping("/{id}")
    public Optional<Book> getBookById(@PathVariable Long id) {
        if(bookService.getBookById(id).isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
        else{
            return bookService.getBookById(id);
        }
    }
    // Crear un nuevo libro con precio
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        // Validar si el precio es nulo y asignar un valor predeterminado
        if (book.getPrice() == null) {
            book.setPrice(BigDecimal.ZERO);
        }
        return bookService.createBook(book);
    }

    // Actualizar un libro
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
        return bookService.updateBook(id, bookDetails);
    }

    // Eliminar un libro
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        throw new ResponseStatusException(HttpStatus.OK, "Book deleted");

    }

    // Obtener un libro por su título
    @GetMapping(params = "title")
    public Book getBookByTitle(@RequestParam("title") String title) {
        if(bookService.getBookByTitle(title) == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }else {
            return (Book) bookService.getBookByTitle(title);
        }
    }




}
