import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'Spice Villa', cuisine: 'Indian' },
  { id: 2, name: 'Pizza Hub', cuisine: 'Italian' },
  { id: 3, name: 'Sushi World', cuisine: 'Japanese' },
];

const Home = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem',
    color: '#fff',
  };

  const cardStyle = {
    border: '1px solid rgba(255,255,255,0.6)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '8px',
  };

  return (
    <div style={backgroundStyle}>
      <h2>Top Restaurants</h2>
      {restaurants.map(res => (
        <div key={res.id} style={cardStyle}>
          <h3>{res.name}</h3>
          <p>Cuisine: {res.cuisine}</p>
          <Link style={{ color: '#ff9900', textDecoration: 'underline' }} to={`/restaurant/${res.id}`}>
            View Menu
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
