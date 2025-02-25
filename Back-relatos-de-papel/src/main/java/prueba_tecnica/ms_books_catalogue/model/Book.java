package prueba_tecnica.ms_books_catalogue.model;

import jakarta.persistence.*;
import lombok.Data;  // Lombok para generar getters, setters, toString, equals, hashCode, etc.
import java.util.Date;
import java.math.BigDecimal; // Importar para manejar decimales

@Entity
@Table(name = "book")
@Data // Lombok genera automáticamente los métodos getter, setter, toString(), equals(), hashCode() y el constructor por defecto.
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "image_sent")
    private String imageSent;
    @Column(name = "title_sent")
    private String titleSent;
    private String format;
    private String author;
    private int year;
    private String language;
    private String edition;
    @Column(name = "text_sent")
    private String textSent;
    private String genre;
    @Column(name = "short_description")
    private String shortDescription;
    private BigDecimal price;

}