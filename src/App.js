import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Saints from './pages/Saints';
import Navbar from './Navbar';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser); // Set user state based on firebase authentication state
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <AppWithNavbar user={user} />
    </Router>
  );
}

function AppWithNavbar({ user }) {
  const location = useLocation(); // useLocation hook inside Router

  return (
    <>
      {/* Conditionally render Navbar based on the route */}
      {user && location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/saints" element={user ? <Saints /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
