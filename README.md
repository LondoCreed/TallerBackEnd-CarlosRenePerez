
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

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** (v14+)
- **MongoDB** (puede ser una instancia local o remota)
  
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

   ```bash
   npm install
   ```

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

## Endpoints

### Tiendas

- **GET /api/tiendas/all**: Devuelve todas las tiendas.
- **GET /api/tiendas/nombre/:nombre**: Devuelve las tiendas filtradas por nombre.
- **GET /api/tiendas/direccion/:direccion**: Devuelve las tiendas filtradas por dirección.

### Productos

- **GET /api/productos/all**: Devuelve todos los productos.
- **GET /api/productos/marca/:marca**: Devuelve los productos filtrados por marca.
- **GET /api/productos/precio/:precio**: Devuelve los productos filtrados por precio.

### Empleados

- **GET /api/empleados/all**: Devuelve todos los empleados.
- **GET /api/empleados/cargo/:cargo**: Devuelve los empleados filtrados por cargo.
- **GET /api/empleados/salario/:salario**: Devuelve los empleados filtrados por salario.

## Ejemplos de uso

### Consultar todas las tiendas

```bash
GET http://localhost:8080/api/tiendas/all
```

### Buscar una tienda por nombre

```bash
GET http://localhost:8080/api/tiendas/nombre/Tienda%20A
```

### Filtrar productos por marca

```bash
GET http://localhost:8080/api/productos/marca/ByteBook
```

### Filtrar empleados por cargo

```bash
GET http://localhost:8080/api/empleados/cargo/Cajero
```

## Scripts de datos

Para insertar datos de prueba en tu base de datos, puedes usar los siguientes comandos:

- **Insertar tiendas de ejemplo**:

  ```bash
  npm run dataTiendas
  ```

- **Insertar productos de ejemplo**:

  ```bash
  npm run dataProductos
  ```

- **Insertar empleados de ejemplo**:

  ```bash
  npm run dataEmpleados
  ```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y confirma los commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Envía un push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.
