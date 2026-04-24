import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';
import AdminOverview from './pages/AdminOverview';
import AdminOrders from './pages/AdminOrders';
import AdminTeam from './pages/AdminTeam';
import AdminSupport from './pages/AdminSupport';
import Showcase from './pages/Showcase';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CustomerSupport from './pages/CustomerSupport';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><main style={{ minHeight: 'calc(100vh - 5rem - 300px)' }}><Showcase /></main><Footer /></>} />
        <Route path="/product/:id" element={<><Header /><main style={{ minHeight: 'calc(100vh - 5rem - 300px)' }}><ProductDetail /></main><Footer /></>} />
        <Route path="/support" element={<><Header /><main style={{ minHeight: 'calc(100vh - 5rem - 300px)' }}><CustomerSupport /></main><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Dashboard / Inventory Nested Routes */}
        <Route path="/inventory" element={<AdminLayout />}>
          <Route path="overview" element={<AdminOverview />} />
          <Route path="stock" element={<Products />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="team" element={<AdminTeam />} />
          <Route path="support" element={<AdminSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
