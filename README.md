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
