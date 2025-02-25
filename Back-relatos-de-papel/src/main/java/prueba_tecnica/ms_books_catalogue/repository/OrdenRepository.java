package prueba_tecnica.ms_books_catalogue.repository;

import prueba_tecnica.ms_books_catalogue.model.Orden;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdenRepository extends JpaRepository<Orden, Long> {
}
