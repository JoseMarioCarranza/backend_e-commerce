# Backend de E-Commerce

Este proyecto es un backend para un e-commerce que maneja autenticación y autorización mediante JWT, y utiliza MongoDB como base de datos. El backend está estructurado para gestionar usuarios, productos y pedidos, y contiene rutas, modelos, middlewares, controladores y variables de entorno. Está desplegado en Render: https://backend-e-commerce-y7xl.onrender.com

## Características del Proyecto

- **Base de datos:** MongoDB alojada en Mongo Atlas.
- **Colecciones:** Usuarios, Productos, Pedidos.
- **Rutas y Endpoints:** CRUD de productos, gestión de usuarios y pedidos.
- **Autenticación y Autorización:** Uso de JWT para proteger endpoints.
- **Control de Acceso:** CRUD de productos protegido para usuarios con rol de administrador.
- **Hashing de Contraseñas:** Para asegurar las contraseñas de los usuarios.

## Pruebas del Proyecto

Puedes probar las funcionalidades del proyecto accediendo al despliegue en Render: https://backend-e-commerce-y7xl.onrender.com

Para funciones administrativas, utiliza uno de los siguientes usuarios:

1. **Usuario:** jose@coreo.com | **Contraseña:** 123456
2. **Usuario:** jorge@correo.com | **Contraseña:** 123456

## Funcionalidades

### Funciones para Pedidos

1. **Obtener Pedidos**
   - **Método:** GET
   - **Ruta:** `/api/pedidos`
   - **Función:** Obtiene los pedidos del usuario actual.
   - **Requiere:** Bearer token.

2. **Crear Pedido**
   - **Método:** POST
   - **Ruta:** `/api/pedidos`
   - **Función:** Crear un nuevo pedido.
   - **Requiere:** Bearer token.
   - **Body:**
     ```json
     {
       "producto": "id_del_producto",
       "cantidad": "número_de_cantidad",
       "precio": "precio_total"
     }
     ```

3. **Modificar Pedido**
   - **Método:** PUT
   - **Ruta:** `/api/pedidos/:id`
   - **Función:** Modificar un pedido existente.
   - **Requiere:** Bearer token.
   - **Body:**
     ```json
     {
       "cantidad": "nueva_cantidad",
       "precio": "nuevo_precio"
     }
     ```

4. **Eliminar Pedido**
   - **Método:** DELETE
   - **Ruta:** `/api/pedidos/:id`
   - **Función:** Elimina un pedido existente.
   - **Requiere:** Bearer token.

### Funciones para Productos

1. **Obtener Productos**
   - **Método:** GET
   - **Ruta:** `/api/productos`
   - **Función:** Obtiene todos los productos.

2. **Obtener Mis Productos**
   - **Método:** GET
   - **Ruta:** `/api/productos/misProductos`
   - **Función:** Obtiene los productos creados por el usuario actual (solo administrador).
   - **Requiere:** Bearer token y rol de administrador.

3. **Crear Producto**
   - **Método:** POST
   - **Ruta:** `/api/productos`
   - **Función:** Crear un nuevo producto.
   - **Requiere:** Bearer token y rol de administrador.
   - **Body:**
     ```json
     {
       "nombre": "nombre_del_producto",
       "precio": "precio_del_producto"
     }
     ```

4. **Modificar Producto**
   - **Método:** PUT
   - **Ruta:** `/api/productos/:id`
   - **Función:** Modificar un producto existente.
   - **Requiere:** Bearer token y rol de administrador.
   - **Body:**
     ```json
     {
       "nombre": "nuevo_nombre",
       "precio": "nuevo_precio"
     }
     ```

5. **Eliminar Producto**
   - **Método:** DELETE
   - **Ruta:** `/api/productos/:id`
   - **Función:** Elimina un producto existente.
   - **Requiere:** Bearer token y rol de administrador.

### Funciones para Usuarios

1. **Crear Usuario**
   - **Método:** POST
   - **Ruta:** `/api/usuarios/signup`
   - **Función:** Registra un nuevo usuario.
   - **Body:**
     ```json
     {
       "name": "nombre_usuario",
       "email": "correo_usuario",
       "password": "contraseña"
     }
     ```

2. **Loguear Usuario**
   - **Método:** POST
   - **Ruta:** `/api/usuarios/login`
   - **Función:** Loguea un usuario.
   - **Body:**
     ```json
     {
       "email": "correo_usuario",
       "password": "contraseña"
     }
     ```

3. **Obtener Datos del Usuario Actual**
   - **Método:** GET
   - **Ruta:** `/api/usuarios/data`
   - **Función:** Obtiene los datos del usuario autenticado.
   - **Requiere:** Bearer token.

4. **Convertir en Administrador**
   - **Método:** POST
   - **Ruta:** `/api/usuarios/makeadmin`
   - **Función:** Asigna rol de administrador a un usuario.
   - **Requiere:** Bearer token y rol de administrador.
   - **Body:**
     ```json
     {
       "id": "id_del_usuario"
     }
     ```

## Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JoseMarioCarranza/backend_e-commerce/
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo .env con las siguientes variables:
   ```env
   NODE_ENV = production / development
   PORT = tu puerto en el que correra el servidor

   MONGO_URI = tu_mongo_uri

   JWT_SECRET = tu_jwt_secret

   JWT_EXPIRES_IN = tiempo
   ```

4. Ejecutar el servidor:
   ```bash
   npm start
   ```
