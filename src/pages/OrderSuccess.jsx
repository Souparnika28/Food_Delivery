import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default OrderSuccess;
