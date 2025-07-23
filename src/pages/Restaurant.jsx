import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const restaurants = [
  { id: 1, name: 'Spice Villa', cuisine: 'Indian' },
  { id: 2, name: 'Pizza Hub', cuisine: 'Italian' },
  { id: 3, name: 'Sushi World', cuisine: 'Japanese' },
];

const menus = {
  1: [
    { id: 101, name: 'Paneer Butter Masala', price: 180 },
    { id: 102, name: 'Chicken Biryani', price: 220 },
    { id: 103, name: 'Masala Dosa', price: 90 },
  ],
  2: [
    { id: 201, name: 'Margherita Pizza', price: 250 },
    { id: 202, name: 'Pasta Alfredo', price: 200 },
    { id: 203, name: 'Bruschetta', price: 150 },
  ],
  3: [
    { id: 301, name: 'California Roll', price: 300 },
    { id: 302, name: 'Spicy Tuna Roll', price: 320 },
    { id: 303, name: 'Miso Soup', price: 100 },
  ],
};

const Restaurant = () => {
  const { id } = useParams(); // Get restaurant ID from route
  const { addToCart } = useContext(CartContext); // Access cart context

  const restaurantId = parseInt(id); // Convert to number
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const menu = menus[restaurantId] || [];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{restaurant ? restaurant.name : 'Restaurant Not Found'} - Menu</h2>

      {menu.length > 0 ? (
        menu.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <p style={{ fontWeight: 'bold', margin: 0 }}>{item.name}</p>
              <p style={{ margin: 0 }}>₹{item.price}</p>
            </div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p style={{ marginTop: '2rem' }}>No menu items found for this restaurant.</p>
      )}
    </div>
  );
};

export default Restaurant;