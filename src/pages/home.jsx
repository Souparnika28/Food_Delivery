import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'Spice Villa', cuisine: 'Indian' },
  { id: 2, name: 'Pizza Hub', cuisine: 'Italian' },
  { id: 3, name: 'Sushi World', cuisine: 'Japanese' },
];

const Home = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Top Restaurants</h2>
      {restaurants.map(res => (
        <div key={res.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h3>{res.name}</h3>
          <p>Cuisine: {res.cuisine}</p>
          <Link to={'/restaurant/${res.id}'}>View Menu</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;