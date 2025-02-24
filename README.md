# Proyecto Full Stack

Este proyecto incluye una aplicación frontend en React y una aplicación backend en Spring Boot.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Java (JDK 11 o superior)
- Maven (v3.6 o superior)

## Instalación

### Frontend

1. Navega al directorio del frontend:
    ```sh
    cd frontend
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Inicia la aplicación:
    ```sh
    npm start
    o
    npx vite
    ```

La aplicación estará disponible en `http://localhost:5173/`.

### Backend

1. Navega al directorio del backend:
    ```sh
    cd backend
    ```

2. Compila el proyecto y descarga las dependencias:
    ```sh
    mvn clean install
    ```

3. Inicia la aplicación:
    ```sh
    mvn spring-boot:run
    ```

La API estará disponible en `http://localhost:8080`.

## Estructura del Proyecto

- `frontend/`: Contiene la aplicación React.
- `backend/`: Contiene la aplicación Spring Boot.
 
##Data Base

CREATE DATABASE ms_books_catalogue;

USE ms_books_catalogue;

CREATE TABLE Book (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
image_sent VARCHAR(255),
title_sent VARCHAR(255) NOT NULL,
format VARCHAR(50),
author VARCHAR(255),
year INT,
language VARCHAR(50),
edition VARCHAR(50),
text_sent TEXT,
genre VARCHAR(50),
short_description TEXT,
price DECIMAL(10, 2)
);

CREATE TABLE User (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
surname VARCHAR(255),
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
entradas BIGINT
);

CREATE TABLE Orden (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
book_id BIGINT,
user_id BIGINT,
FOREIGN KEY (book_id) REFERENCES Book(id),
FOREIGN KEY (user_id) REFERENCES User(id)
);

INSERT INTO book (image_sent, title_sent, format, author, year, language, edition, text_sent, genre, short_description, price) VALUES
('cincuentaImage', 'Cincuenta sombras de Grey', 'ebook', 'E.L. James', '2011', 'English', '1st',
'Cincuenta sombras de Grey es una novela que explora la compleja relación entre Anastasia Steele, una joven estudiante universitaria, y Christian Grey, un empresario multimillonario con un oscuro pasado. La historia comienza cuando Anastasia, por casualidad, entrevista a Christian y se siente atraída por su atractivo y carismático pero enigmático carácter.\n\nLa novela se adentra rápidamente en un romance que combina elementos de atracción, pasión y una dinámica de poder poco convencional. Christian introduce a Anastasia en un contrato que describe su relación basada en prácticas BDSM, lo que desafía las expectativas románticas y emocionales de ambos personajes.\n\nA través de los capítulos, E.L. James explora temas como el consentimiento, el control, los traumas del pasado y la evolución emocional de los protagonistas. Aunque el libro generó una enorme popularidad, también ha recibido críticas mixtas. Por un lado, se alaba su capacidad para generar discusiones sobre sexualidad y relaciones no convencionales, pero por otro, se critica su calidad literaria, los clichés románticos y las representaciones de las dinámicas de poder como poco saludables.\n\nEn términos de estilo, el libro es accesible y fácil de leer, aunque su prosa ha sido descrita como repetitiva. No obstante, logró captar la atención del público global, convirtiéndose en un fenómeno cultural que generó una trilogía y adaptaciones cinematográficas.\n\nIdeal para lectores interesados en historias de romance intenso y exploraciones de dinámicas emocionales complejas, Cincuenta sombras de Grey es un libro que polariza opiniones pero no deja indiferente.',
'Romance', 'Cincuenta sombras de Grey es una novela que explora la compleja relación entre Anastasia Steele y Christian Grey.', 10.99),

('cienAnosImage', 'Cien años de soledad', 'hardcover', 'Gabriel García Márquez', '1967', 'Spanish', '1st',
'Es una de las obras más emblemáticas del realismo mágico y un hito de la literatura latinoamericana. La novela relata la fundación, auge y caída del pueblo ficticio de Macondo a través de la historia de la familia Buendía, cuyos miembros se ven atrapados en ciclos repetitivos de amor, tragedia y soledad. Gabriel García Márquez teje una narrativa llena de simbolismo, que mezcla lo mágico con lo cotidiano: desde lluvias que duran años hasta personajes que ascienden al cielo. El libro explora temas como la soledad, el destino, el poder y la memoria colectiva. Es una obra que exige atención, ya que la complejidad de los personajes y las generaciones requiere seguir el árbol genealógico con cuidado. Una joya literaria que trasciende fronteras.',
'Magical Realism', 'Cien años de soledad narra la historia de la familia Buendía a lo largo de varias generaciones en Macondo.', 15.99),

('orgulloPrejuicioImage', 'Orgullo y prejuicio', 'paperback', 'Jane Austen', '1813', 'English', '1st',
'Este clásico de la literatura inglesa combina romance, humor y una aguda crítica social. La historia sigue a Elizabeth Bennet, una joven independiente y de fuerte carácter, que vive en un entorno donde las mujeres están presionadas a casarse por conveniencia. La llegada del rico y reservado señor Darcy cambia su vida y la de su familia. A lo largo de la trama, ambos personajes enfrentan sus prejuicios y su orgullo mientras descubren su verdadero carácter y sentimientos. Austen retrata con maestría las dinámicas familiares, las normas sociales y las diferencias de clase en la Inglaterra del siglo XIX. Más que una simple novela romántica, es un comentario atemporal sobre las relaciones humanas y las expectativas sociales.',
'Classic', 'Orgullo y prejuicio explora las complejidades del amor, la familia y la sociedad en la Inglaterra del siglo XIX.', 12.99),

('principitoImage', 'El Principito', 'hardcover', 'Antoine de Saint-Exupéry', '1943', 'French', '1st',
'Aunque parece una historia infantil, El Principito es una obra filosófica y poética que invita a reflexionar sobre la vida, el amor y la amistad. La trama comienza cuando un piloto, tras un aterrizaje forzoso en el desierto del Sahara, encuentra a un niño peculiar que dice ser un príncipe venido de otro planeta. El principito narra sus viajes por diferentes mundos, cada uno habitado por personajes que representan aspectos de la naturaleza humana, como el egoísmo, la ambición o la obsesión por la riqueza. A través de un lenguaje sencillo pero profundo, el autor explora verdades universales y emocionales que resuenan en lectores de todas las edades. Es una obra que invita a redescubrir lo esencial, recordándonos que "lo esencial es invisible a los ojos".',
'Children\'s Literature', 'El Principito narra la historia de un joven príncipe que viaja de planeta en planeta, aprendiendo valiosas lecciones sobre la vida.', 9.99),

('senorAnillosImage', 'El señor de los anillos', 'hardcover', 'J.R.R. Tolkien', '1954', 'English', '1st',
'Esta monumental saga de fantasía sigue a Frodo Bolsón, un hobbit humilde, en su misión para destruir el Anillo Único, un artefacto de inmenso poder creado por Sauron, el Señor Oscuro. Acompañado por un grupo diverso de aliados, incluidos el mago Gandalf, el guerrero Aragorn y su fiel amigo Sam, Frodo debe enfrentar peligros mortales y tentaciones para cumplir con su destino. Tolkien crea un mundo vasto y detallado, lleno de mitología, lenguajes inventados y paisajes mágicos. La narrativa abarca temas como la lucha entre el bien y el mal, el sacrificio, la amistad y el poder destructivo de la ambición. Más que una simple novela, es un universo entero que ha definido el género de fantasía moderna y sigue siendo una obra de referencia.',
'Fantasy', 'El señor de los anillos sigue la aventura de Frodo Bolsón y sus amigos mientras intentan destruir el Anillo Único.', 25.99),

('quijoteImage', 'Don Quijote de la Mancha', 'paperback', 'Miguel de Cervantes', '1605', 'Spanish', '1st',
'Considerada una de las mayores obras de la literatura universal, esta novela cuenta las aventuras de Don Quijote, un hidalgo obsesionado con los libros de caballerías, que decide convertirse en caballero andante para revivir una época de gloria que ya no existe. Acompañado por su fiel escudero, Sancho Panza, Quijote confunde la realidad con sus fantasías, enfrentándose a molinos de viento que cree gigantes y viendo doncellas en simples campesinas. La obra es a la vez una parodia de los libros de caballerías y una reflexión profunda sobre el idealismo, la locura y la naturaleza humana. Con su rica mezcla de humor, melancolía y sabiduría, Cervantes nos invita a cuestionar nuestras percepciones de la realidad.',
'Classic', 'Don Quijote de la Mancha narra las aventuras y desventuras de un hidalgo manchego que decide convertirse en caballero andante.', 14.99),

('harryPotterImage', 'Harry Potter', 'hardcover', 'J.K. Rowling', '1997', 'English', '1st',
'La serie de Harry Potter sigue el viaje de un joven mago que descubre su destino como el "niño que vivió", destinado a enfrentarse al oscuro mago Lord Voldemort. Desde su vida como un huérfano maltratado por sus tíos hasta su ingreso al Colegio Hogwarts de Magia y Hechicería, la historia combina la magia con temas universales como la amistad, la valentía, y el amor.',
'Fantasy', 'Harry Potter sigue las aventuras de un joven mago y sus amigos en la escuela de magia y hechicería Hogwarts.', 29.99);