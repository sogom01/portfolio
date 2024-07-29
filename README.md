# Portfolio

Este es un proyecto de portafolio personal que incluye tanto un frontend como un backend. La aplicación frontend está diseñada para mostrar información y proyectos personales, mientras que el backend maneja solicitudes de contacto y envíos de formularios a través de correos electrónicos.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **Backend**: Maneja las solicitudes API y envíos de formularios.
2. **Frontend**: Interfaz de usuario del portafolio.

### Backend

El backend está construido con Express y utiliza `nodemailer` para enviar correos electrónicos. Las variables de entorno se gestionan con `dotenv`.

#### Instalación del Backend

1. Clona el repositorio:
    ```bash
    git clone https://github.com/sogom01/portfolio.git
    ```

2. Navega al directorio `backend`:
    ```bash
    cd portfolio/backend
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en el directorio `backend` con las siguientes variables:
    ```plaintext
    EMAIL_USER=tu_email@gmail.com
    EMAIL_PASS=tu_contraseña
    ```

5. Inicia el servidor:
    ```bash
    node index.js
    ```

El servidor debería estar ejecutándose en `http://localhost:5000`.

#### Endpoints del Backend

- **POST /api/contact**: Envía un correo electrónico con los datos del formulario de contacto.

### Frontend

El frontend está construido con React (asumido, dado el contexto) y muestra la información del portafolio.

#### Instalación del Frontend

1. Navega al directorio `frontend`:
    ```bash
    cd portfolio/frontend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    npm start
    ```

La aplicación debería estar ejecutándose en `http://localhost:3000`.

## Despliegue

Este proyecto está configurado para ser desplegado en Vercel. El archivo `vercel.json` contiene la configuración necesaria para el despliegue.

### Desplegar en Vercel

1. Asegúrate de tener la CLI de Vercel instalada:
    ```bash
    npm install -g vercel
    ```

2. En el directorio raíz del proyecto, ejecuta:
    ```bash
    vercel
    ```

Sigue las instrucciones en pantalla para completar el despliegue.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier cambio importante. Asegúrate de actualizar las pruebas según sea necesario.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Si tienes alguna pregunta, no dudes en contactarme en [jsogfd@gmail.com](mailto:jsogfd@gmail.com).
