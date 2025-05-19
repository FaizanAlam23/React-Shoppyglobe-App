
# 🛒 ShoppyGlobe – E-commerce Application

ShoppyGlobe is a basic yet functional e-commerce web application built with **React**, **Redux**, **React Router**, and **Vite**. It allows users to browse products, view product details, manage a shopping cart, and search for items.

## 📦 Features

- **Product Listing** – Displays all products from an external API.
- **Product Detail Page** – Detailed view of selected product using route parameters.
- **Search Functionality** – Filter products by search input.
- **Cart Management** – Add, remove, and update cart items using Redux.
- **Routing** – Implemented using `react-router-dom`.
- **Error Handling** – Handles failed API requests gracefully.
- **Responsive UI** – Works across devices.
- **Performance Optimization** – Code splitting with `React.lazy` and `Suspense`.

## 🧱 Tech Stack

- **React 19**
- **Redux Toolkit**
- **React Router v7**
- **Vite** (for fast bundling)
- **React Icons**


## 📁 Folder Structure

React-Shoppyglobe-App/
│
├── public/
│   └── index.html
│
├── src/               
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── NotFound.jsx
│   │  
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
└── README.md

```

## 🚀 Installation

Follow these steps to setup and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/FaizanAlam23/React-Shoppyglobe-App
cd shoppyglobe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

## 🌐 API Used

- Product data is fetched from:  
  [https://dummyjson.com/products](https://dummyjson.com/products)

## 📝 License

This project is created as part of a development assignment and is intended for educational use.