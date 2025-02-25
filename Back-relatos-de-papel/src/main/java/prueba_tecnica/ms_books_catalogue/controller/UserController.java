package prueba_tecnica.ms_books_catalogue.controller;


import prueba_tecnica.ms_books_catalogue.model.User;
import prueba_tecnica.ms_books_catalogue.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173") // URL de ms-books-payments
@RequiredArgsConstructor // Lombok genera el constructor con todos los parámetros necesarios
public class UserController {

    private final UserService userService; // Inyección de dependencia automática

    // Obtener todos los usuarios
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    // Obtener un usuario por su ID
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        if(userService.getUserById(id).isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        else{
            return userService.getUserById(id);
        }
    }
    // Crear un nuevo usuario
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // Actualizar un usuario
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails);
    }

    // Eliminar un usuario
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        throw new ResponseStatusException(HttpStatus.OK, "User deleted");

    }

    // Obtener un usuario por su email
    @GetMapping(params = "email")
    public User getUserByEmail(@RequestParam("email") String email) {
        if(userService.getUserByEmail(email) == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }else {
            return userService.getUserByEmail(email);
        }
    }

    //Validar usuario|
    @GetMapping(params = {"email", "password"})
    public User validateUser(@RequestParam("email") String email, @RequestParam("password") String password) {
        if(userService.getUserByEmail(email) == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }else {
            User user = userService.getUserByEmail(email);
            if(user.getPassword().equals(password)){
                return user;
            }else{
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid password");
            }
        }
    }

    @PatchMapping("/{id}")
    public User updateDataUser(@PathVariable Long id, @RequestBody String userDetails) {

        User chucho= userService.updateUser(id,userDetails);
        return null;


    }
}
