package grupo39.ms_books_catalogue.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "purchases")
@Data
public class Orden {

    private Long bookId;
    private Long userId;
    @Id
    @Column(name = "idpurchases")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

}
