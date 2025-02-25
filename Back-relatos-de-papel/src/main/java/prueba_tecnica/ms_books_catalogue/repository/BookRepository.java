package prueba_tecnica.ms_books_catalogue.repository;

import prueba_tecnica.ms_books_catalogue.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Book findBytitleSent(String title);
}
