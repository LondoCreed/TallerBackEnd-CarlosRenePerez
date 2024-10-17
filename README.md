
# Backend de Gestión de Tiendas, Productos y Empleados

Este proyecto es un servidor backend creado con Node.js, Express y MongoDB, que permite gestionar tiendas, productos y empleados. Proporciona una API REST para realizar operaciones como consultar, filtrar y gestionar información de cada entidad.

## Tecnologías

- **Node.js**
- **Express**
- **MongoDB** con **Mongoose**
- **dotenv** para manejar las variables de entorno
- **Nodemon** para desarrollo
- **Morgan** para registrar peticiones
- **CORS** habilitado

>[!IMPORTANT]
>
>## Requisitos previos
>
>Asegúrate de tener instalados los siguientes programas:
>
>- **Node.js** (v14+)
>- **MongoDB** (puede ser una instancia local o remota)
  
## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LondoCreed/TallerBackEnd-CarlosRenePerez.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd TallerBackEnd-CarlosRenePerez
   ```

3. Instala las dependencias:

   npm install

{si la primera no llega a funcionar, las dependencias exactas son las siguientes(usar solo sino funciona lo primero)

   npm install express mongoose dotenv
   npm install --save-dev nodemon}

4. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

   ```bash
   PORT=8080
   URI_MONGO="tu_uri_de_mongo"
   ```

5. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   O bien, para iniciar el servidor en modo producción:

   ```bash
   npm start
   ```
>[!NOTE]
>## Endpoints
>
>### Tiendas
>
>- **GET /api/tiendas/todos**: Devuelve todas las tiendas.
>- **GET /api/tiendas/nombre/:nombre**: Devuelve las tiendas filtradas por nombre.
>- **GET /api/tiendas/direccion/:direccion**: Devuelve las tiendas filtradas por dirección.
>
>### Productos
>
>- **GET /api/productos/todos**: Devuelve todos los productos.
>- **GET /api/productos/marca/:marca**: Devuelve los productos filtrados por marca.
>- **GET /api/productos/precio/:precio**: Devuelve los productos filtrados por precio.
>
>### Empleados
>
>- **GET /api/empleados/todos**: Devuelve todos los empleados.
>- **GET /api/empleados/cargo/:cargo**: Devuelve los empleados filtrados por cargo.
>- **GET /api/empleados/salario/:salario**: Devuelve los empleados filtrados por salario.

>[!TIP]
>## Ejemplos de uso
>
>### Consultar todas las tiendas
>
>**Request:**
>GET `http://localhost:8080/api/tiendas/todos`
>
>**Response:**
>```json
>[
>  {
>    "id": "1",
>    "nombre": "Tienda A",
>    "direccion": "Calle 123"
>  },
>  ...
>]
>```
>
>### Buscar una tienda por nombre
>
>GET http://localhost:8080/api/tiendas/nombre/Tienda%20A
>
>### Filtrar productos por marca
>
>GET http://localhost:8080/api/productos/marca/ByteBook
>
>### Filtrar empleados por cargo
>
>GET http://localhost:8080/api/empleados/cargo/Cajero

>[!WARNING]
>Las siguientes modificaran las bases de datos existentes, por lo que debes tener cuidado antes de ejecutar los comandos.
>## Scripts de datos
>
>Para insertar datos de prueba en tu base de datos, puedes usar los siguientes comandos:
>
>- **Insertar tiendas de ejemplo**:
>
>     - npm run dataTiendas
>
>- **Insertar productos de ejemplo**:
>
>    - npm run dataProductos
>
>- **Insertar empleados de ejemplo**:
>
>    - npm run dataEmpleados

>[!NOTE]
>## Contribución
>
>Si deseas contribuir a este proyecto, por favor sigue estos pasos:
>
>1. Haz un fork del repositorio.
>2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
>3. Realiza los cambios y confirma los commits (`git commit -m 'Agrega nueva funcionalidad'`).
>4. Envía un push a la rama (`git push origin feature/nueva-funcionalidad`).
>5. Crea un Pull Request.
