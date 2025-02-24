package grupo39.ms_books_catalogue.controller;
import grupo39.ms_books_catalogue.model.Book;
import grupo39.ms_books_catalogue.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookRepository bookRepository;

    @Test
    public void testBookLifecycle() throws Exception {
        // Buscar (no está)
        mockMvc.perform(get("/api/books/1"))
                .andExpect(status().isNotFound());

        // Crear nuevo
        mockMvc.perform(post("/api/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Test Book\",\"author\":\"Test Author\",\"isbn\":\"1234554321\",\"category\":\"Fiction\",\"rating\":4.5,\"stock\":10,\"price\":19.99,\"visible\":true,\"publicationDate\":\"2023-10-01\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Test Book"))
                .andExpect(jsonPath("$.author").value("Test Author"))
                .andExpect(jsonPath("$.isbn").value("1234554321"))
                .andExpect(jsonPath("$.category").value("Fiction"))
                .andExpect(jsonPath("$.rating").value(4.5))
                .andExpect(jsonPath("$.stock").value(10))
                .andExpect(jsonPath("$.price").value(19.99))
                .andExpect(jsonPath("$.visible").value(true))
                .andExpect(jsonPath("$.publicationDate").value("2023-10-01T00:00:00.000+00:00"));

        // Volver a buscar (está y todos los datos han sido guardados bien)
        Book savedBook = bookRepository.findAll().get(0);
        mockMvc.perform(get("/api/books/" + savedBook.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Test Book"))
                .andExpect(jsonPath("$.author").value("Test Author"))
                .andExpect(jsonPath("$.isbn").value("1234554321"))
                .andExpect(jsonPath("$.category").value("Fiction"))
                .andExpect(jsonPath("$.rating").value(4.5))
                .andExpect(jsonPath("$.stock").value(10))
                .andExpect(jsonPath("$.price").value(19.99))
                .andExpect(jsonPath("$.visible").value(true))
                .andExpect(jsonPath("$.publicationDate").value("2023-10-01T00:00:00.000+00:00"));

        // Editar y cambiar algún dato
        mockMvc.perform(put("/api/books/" + savedBook.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"title\":\"Updated Book\",\"author\":\"Updated Author\",\"isbn\":\"0987654321\",\"category\":\"Non-Fiction\",\"rating\":4.0,\"stock\":5,\"price\":29.99,\"visible\":false,\"publicationDate\":\"2023-11-01\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated Book"))
                .andExpect(jsonPath("$.author").value("Updated Author"))
                .andExpect(jsonPath("$.isbn").value("0987654321"))
                .andExpect(jsonPath("$.category").value("Non-Fiction"))
                .andExpect(jsonPath("$.rating").value(4.0))
                .andExpect(jsonPath("$.stock").value(5))
                .andExpect(jsonPath("$.price").value(29.99))
                .andExpect(jsonPath("$.visible").value(false))
                .andExpect(jsonPath("$.publicationDate").value("2023-11-01T00:00:00.000+00:00"));

        // Volver a buscar (está y el dato ha sido modificado)
        mockMvc.perform(get("/api/books/" + savedBook.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated Book"))
                .andExpect(jsonPath("$.author").value("Updated Author"))
                .andExpect(jsonPath("$.isbn").value("0987654321"))
                .andExpect(jsonPath("$.category").value("Non-Fiction"))
                .andExpect(jsonPath("$.rating").value(4.0))
                .andExpect(jsonPath("$.stock").value(5))
                .andExpect(jsonPath("$.price").value(29.99))
                .andExpect(jsonPath("$.visible").value(false))
                .andExpect(jsonPath("$.publicationDate").value("2023-11-01T00:00:00.000+00:00"));

        // Eliminar la entidad
        mockMvc.perform(delete("/api/books/" + savedBook.getId()))
                .andExpect(status().isOk());

        // Volver a buscar (no está)
        mockMvc.perform(get("/api/books/" + savedBook.getId()))
                .andExpect(status().isNotFound());
    }
}