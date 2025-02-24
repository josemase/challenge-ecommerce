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