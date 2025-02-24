package grupo39.ms_books_catalogue.service;

import grupo39.ms_books_catalogue.model.Book;

import grupo39.ms_books_catalogue.model.User;
import grupo39.ms_books_catalogue.repository.UserJPARepository;
import grupo39.ms_books_catalogue.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.github.fge.jsonpatch.JsonPatchException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatchException;
import com.github.fge.jsonpatch.mergepatch.JsonMergePatch;
import java.util.List;
import java.util.Optional;

@Service
@Data
public class UserService {

    @Autowired
   private UserRepository userRepository;
    @Autowired
    private UserJPARepository userJPARepository;

   //crear usuario
   public User createUser(User user) {
       return userRepository.save(user);
   }

   //actualizar usuario
    public User updateUser(Long id, User userDetails) {
         if (userRepository.existsById(id)) {
              userDetails.setId(id);
              return userRepository.save(userDetails);
         }
         return null;
    }

    public User updateUser(Long id, String request) {
       User chucho=userJPARepository.getById(id);
       if(chucho!=null){
           try{
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(request);
                JsonMergePatch jsonMergePatch = JsonMergePatch.fromJson(jsonNode);
                JsonNode patched = jsonMergePatch.apply(objectMapper.convertValue(chucho, JsonNode.class));
                User user = objectMapper.treeToValue(patched, User.class);
                return userRepository.save(user);
           }catch (JsonPatchException | JsonProcessingException e){
               e.printStackTrace();
               return null;
           }

       }else{
           return null;
       }
    }

    //eliminar usuario
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    //obtener usuario por id
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    //obtener todos los usuarios
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }




}
