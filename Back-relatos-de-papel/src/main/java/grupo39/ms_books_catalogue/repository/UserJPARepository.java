package grupo39.ms_books_catalogue.repository;

import grupo39.ms_books_catalogue.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserJPARepository {
    private final UserRepository userRepository;

    public User getById(Long id) {
        User chucho=userRepository.findById(id).orElse(null);
        System.out.println(id+""+userRepository.findById(id).toString());

        return userRepository.findById(id).orElse(null);
    }
}
