# E-Commerce Backend

This project is a backend for an e-commerce platform that handles authentication and authorization using JWT and uses MongoDB as the database. The backend is structured to manage users, products, and orders, and includes routes, models, middlewares, controllers, and environment variables. It is deployed on Render: [E-Commerce Backend](https://backend-e-commerce-y7xl.onrender.com)

## Project Features

- **Database:** MongoDB hosted on Mongo Atlas.
- **Collections:** Users, Products, Orders.
- **Routes and Endpoints:** CRUD for products, user, and order management.
- **Authentication and Authorization:** JWT-based protection for endpoints.
- **Access Control:** CRUD for products restricted to users with admin roles.
- **Password Hashing:** Ensures user password security.

## Project Testing

You can test the project functionality by accessing the deployment on Render: [E-Commerce Backend](https://backend-e-commerce-y7xl.onrender.com)

For administrative functions, use one of the following credentials:

1. **Email:** jose@coreo.com | **Password:** 123456
2. **Email:** jorge@correo.com | **Password:** 123456

## Features

### Order Management Functions

1. **Get Orders**
   - **Method:** GET
   - **Route:** `/api/pedidos`
   - **Description:** Retrieves the orders of the current user.
   - **Requires:** Bearer token.

2. **Create Order**
   - **Method:** POST
   - **Route:** `/api/pedidos`
   - **Description:** Creates a new order.
   - **Requires:** Bearer token.
   - **Body:**
     ```json
     {
       "producto": "product_id",
       "cantidad": "quantity_number",
       "precio": "total_price"
     }
     ```

3. **Update Order**
   - **Method:** PUT
   - **Route:** `/api/pedidos/:id`
   - **Description:** Updates an existing order.
   - **Requires:** Bearer token.
   - **Body:**
     ```json
     {
       "cantidad": "new_quantity",
       "precio": "new_price"
     }
     ```

4. **Delete Order**
   - **Method:** DELETE
   - **Route:** `/api/pedidos/:id`
   - **Description:** Deletes an existing order.
   - **Requires:** Bearer token.

### Product Management Functions

1. **Get Products**
   - **Method:** GET
   - **Route:** `/api/productos`
   - **Description:** Retrieves all products.

2. **Get My Products**
   - **Method:** GET
   - **Route:** `/api/productos/misProductos`
   - **Description:** Retrieves products created by the current user (admin only).
   - **Requires:** Bearer token and admin role.

3. **Create Product**
   - **Method:** POST
   - **Route:** `/api/productos`
   - **Description:** Creates a new product.
   - **Requires:** Bearer token and admin role.
   - **Body:**
     ```json
     {
       "nombre": "product_name",
       "precio": "product_price"
     }
     ```

4. **Update Product**
   - **Method:** PUT
   - **Route:** `/api/productos/:id`
   - **Description:** Updates an existing product.
   - **Requires:** Bearer token and admin role.
   - **Body:**
     ```json
     {
       "nombre": "new_name",
       "precio": "new_price"
     }
     ```

5. **Delete Product**
   - **Method:** DELETE
   - **Route:** `/api/productos/:id`
   - **Description:** Deletes an existing product.
   - **Requires:** Bearer token and admin role.

### User Management Functions

1. **Create User**
   - **Method:** POST
   - **Route:** `/api/usuarios/signup`
   - **Description:** Registers a new user.
   - **Body:**
     ```json
     {
       "name": "user_name",
       "email": "user_email",
       "password": "password"
     }
     ```

2. **Log In User**
   - **Method:** POST
   - **Route:** `/api/usuarios/login`
   - **Description:** Logs in a user.
   - **Body:**
     ```json
     {
       "email": "user_email",
       "password": "password"
     }
     ```

3. **Get Current User Data**
   - **Method:** GET
   - **Route:** `/api/usuarios/data`
   - **Description:** Retrieves data of the authenticated user.
   - **Requires:** Bearer token.

4. **Make Admin**
   - **Method:** POST
   - **Route:** `/api/usuarios/makeadmin`
   - **Description:** Assigns admin role to a user.
   - **Requires:** Bearer token and admin role.
   - **Body:**
     ```json
     {
       "id": "user_id"
     }
     ```

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/JoseMarioCarranza/backend_e-commerce/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   NODE_ENV=production / development
   PORT=your_port_number

   MONGO_URI=your_mongo_uri

   JWT_SECRET=your_jwt_secret

   JWT_EXPIRES_IN=expiration_time
   ```

4. Run the server:
   ```bash
   npm start
   ```

---

## Contact

- **José Mario Rivera Carranza**
  - 🌐 Website: [www.ingjosemario.com](https://www.ingjosemario.com)
  - 📧 Email: [imt_josecarranza@outlook.com](mailto:imt_josecarranza@outlook.com)
  - 💻 GitHub: [José Mario Carranza](https://github.com/JoseMarioCarranza)
