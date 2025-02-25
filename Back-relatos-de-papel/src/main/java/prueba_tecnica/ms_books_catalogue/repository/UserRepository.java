package prueba_tecnica.ms_books_catalogue.repository;

import prueba_tecnica.ms_books_catalogue.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

     User findByEmail(String email);



}
