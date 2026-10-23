# 🛒 Simple E-Commerce Store

A simple and responsive **Full-Stack E-Commerce Store** built using **HTML, CSS, JavaScript, and Express.js**. This project demonstrates the fundamental concepts of an online shopping platform, including product browsing, product details, shopping cart management, user authentication, and order processing through a clean and user-friendly interface.

---

## ✨ Features

* 🛍️ Product Listing
* 📄 Product Details Page
* 🛒 Shopping Cart (Local Storage)
* 👤 User Registration & Login
* 📦 Order Processing
* 📱 Responsive Design
* 🔗 REST API Integration
* 🎨 Modern and Clean User Interface

---

# 📁 Project Structure

```text
simple-ecommerce-store/
│
├── backend/
│   ├── data/
│   │   ├── products.json
│   │   ├── users.json
│   │   └── orders.json
│   │
│   ├── routes/
│   │   ├── products.js
│   │   ├── users.js
│   │   └── orders.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── auth.js
│   │   └── cart.js
│   │
│   ├── images/
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   └── register.html
│
└── README.md
```

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* Node.js
* Express.js

## Database

* JSON Files (products, users, and orders)

---

# 🚀 Getting Started

## Prerequisites

* Node.js (v16 or above)
* npm (Node Package Manager)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/simple-ecommerce-store.git
```

### 2. Navigate to the Backend Folder

```bash
cd simple-ecommerce-store/backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

The backend server will start at:

```
http://localhost:5000
```

---

## Running the Frontend

Open the **frontend** folder using **Live Server** in Visual Studio Code or run a simple static server.

Using Python:

```bash
python -m http.server 8000 --directory frontend
```

Open your browser and visit:

```
http://localhost:8000
```

---

# 📡 API Endpoints

## Products

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | /products     | Get all products    |
| GET    | /products/:id | Get a product by ID |

---

## Users

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| POST   | /users/register | Register a new user |
| POST   | /users/login    | Login user          |

---

## Orders

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | /orders  | Place a new order |

---

# 🛍️ How to Add New Products

Open:

```
backend/data/products.json
```

Add a new product in the following format:

```json
{
  "id": 8,
  "name": "Sample Product",
  "price": 1999,
  "image": "https://image-url.com/product.jpg",
  "description": "Product description",
  "category": "Electronics",
  "rating": 4.8,
  "stock": 15
}
```

Save the file. No server restart is required.

---

# 📖 How to Use

1. Open the application.
2. Browse available products.
3. Click a product to view its details.
4. Register or log in.
5. Add products to the shopping cart.
6. Review your cart.
7. Place your order.

---

# 📌 Future Enhancements

* Product Search
* Category Filters
* Wishlist
* User Profile
* Payment Gateway Integration
* Order History
* Admin Dashboard
* Product Reviews & Ratings
* Database Integration (MongoDB/MySQL)
* JWT Authentication

---

# ⚠️ Notes

* User information and orders are stored in JSON files for demonstration purposes.
* This project is intended for learning and educational use.
* For production applications, replace JSON storage with a secure database and implement proper authentication.

---

# 👩‍💻 Author

**Bella Gnana Charmika**

---
