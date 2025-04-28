import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Saints from './pages/Saints';
import Navbar from './Navbar';
import { auth } from './firebase';
import { setPersistence, browserSessionPersistence } from 'firebase/auth'; // ✨ Added this

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set session persistence once when app loads
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
          setUser(firebaseUser); // Update user state when auth state changes
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
  const location = useLocation(); // Hook must be inside Router

  return (
    <>
      {/* Conditionally show Navbar only if logged in and not on Login/Register pages */}
      {user && location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/saints" element={user ? <Saints /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
