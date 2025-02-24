package grupo39.ms_books_catalogue.service;


import grupo39.ms_books_catalogue.model.Book;
import grupo39.ms_books_catalogue.model.Orden;
import grupo39.ms_books_catalogue.repository.OrdenRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Data
public class OrdenService {
    @Autowired
    private OrdenRepository ordenRepository;

    //crear orden
    public Orden createOrder(Orden orden) {
        return ordenRepository.save(orden);
    }

    //actualizar orden

    public Orden updateOrder(Long id, Orden ordenDetails) {
        if (ordenRepository.existsById(id)) {
            ordenDetails.setId(id);
            return ordenRepository.save(ordenDetails);
        }
        return null;
    }

    //eliminar orden
    public void deleteOrder(Long id) {
        ordenRepository.deleteById(id);
    }

    //obtener orden por id
    public Optional<Orden> getOrderById(Long id) {
        return ordenRepository.findById(id);
    }

    //obtener todos los ordenes
    public List<Orden> findAllOrders() {
        return ordenRepository.findAll();
    }
}
