package grupo39.ms_books_catalogue.repository;

import grupo39.ms_books_catalogue.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

     User findByEmail(String email);



}
