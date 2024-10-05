# Food Ordering App

A simple **Food Ordering Page** built with ReactJS where users can:
- View a menu of dishes with categories like starters, main course, and desserts.
- Add dishes to their order.
- Place orders by providing table number and contact details.
- View order history and details.

## Features
- Responsive design for desktop and mobile views.
- REST API integration for fetching menu items and order history.
- Ability to place orders and view them in the history.

## Technologies Used
- ReactJS
- Axios (for API calls)
- React Router DOM (for client-side routing)

## Folder Structure

```bash
src/
 ├── components/
 │   ├── MenuPage.js         # Renders menu items and allows users to add items to order
 │   ├── OrderForm.js        # Form to place the order (table number, contact, etc.)
 │   ├── OrderHistory.js     # Displays previous orders
 ├── App.js                  # Main component to manage routing
 ├── App.css                 # Styling for the application
 ├── index.js                # Entry point of the app
 └── service/                
      └── api.js             # Contains the API functions for menu and order management

