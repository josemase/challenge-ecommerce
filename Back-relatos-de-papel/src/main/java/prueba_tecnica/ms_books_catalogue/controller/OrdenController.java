package prueba_tecnica.ms_books_catalogue.controller;


import prueba_tecnica.ms_books_catalogue.model.Orden;
import prueba_tecnica.ms_books_catalogue.service.OrdenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173") // URL de ms-books-payments
@RequiredArgsConstructor // Lombok genera el constructor con todos los parámetros necesarios
public class OrdenController {

    private final OrdenService ordenService; // Inyección de dependencia automática

    // Obtener todas las ordenes
    @GetMapping
    public List<Orden> getAllOrders() {
        return ordenService.findAllOrders();
    }

    // Obtener una orden por su ID
    @GetMapping("/{id}")
    public Optional<Orden> getOrderById(@PathVariable Long id) {
        if(ordenService.getOrderById(id).isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found");
        }
        else{
            return ordenService.getOrderById(id);
        }
    }
    // Crear una nueva orden
    @PostMapping
    public Orden createOrder(@RequestBody Orden order) {
        return ordenService.createOrder(order);
    }

    // Actualizar una orden
    @PutMapping("/{id}")
    public Orden updateOrder(@PathVariable Long id, @RequestBody Orden orderDetails) {
        return ordenService.updateOrder(id, orderDetails);
    }

    // Eliminar una orden
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        ordenService.deleteOrder(id);
        throw new ResponseStatusException(HttpStatus.OK, "Order deleted");

    }
}
