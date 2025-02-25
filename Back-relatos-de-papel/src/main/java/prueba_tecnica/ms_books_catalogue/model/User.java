package prueba_tecnica.ms_books_catalogue.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {

    String name;
    String surname;
    String email;
    String password;
    private Long entradas;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
