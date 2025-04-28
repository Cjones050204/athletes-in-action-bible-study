// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Saints from './pages/Saints';
import Navbar from './Navbar';
import { auth } from './firebase';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
          setUser(firebaseUser);
        });
        return unsubscribe;
      })
      .catch((error) => {
        console.error("Failed to set persistence:", error);
      });
  }, []);

  return (
    <Router>
      <AppWithNavbar user={user} />
    </Router>
  );
}

function AppWithNavbar({ user }) {
  const location = useLocation();

  return (
    <>
      {/* Only show Navbar if logged in and not on Login/Register */}
      {user && location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Welcome />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/saints" element={user ? <Saints /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
