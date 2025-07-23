import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, decreaseQty, removeFromCart, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/OrderSuccess');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold' }}>{item.name}</p>
              <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>

              <button onClick={() => decreaseQty(item.id)}>-</button>
              <button onClick={() => addToCart(item)} style={{ marginLeft: '5px' }}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', color: 'red' }}>Remove</button>
            </div>
          ))}

          <h3>Total: ₹{getTotal()}</h3>
          <button onClick={handleCheckout} style={{ padding: '0.5rem 1rem', backgroundColor: '#4caf50', color: 'white', border: 'none' }}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
