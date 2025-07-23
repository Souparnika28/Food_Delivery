import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
