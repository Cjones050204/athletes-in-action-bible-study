// src/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export default function Navbar() {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to welcome page
      navigate('/');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'steelblue', 
      color: 'white',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      {/* Villanova Logo */}
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center'
      }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/1200px-Villanova_Wildcats_logo.svg.png" 
          alt="Villanova Logo" 
          style={{
            height: '50px',
            width: 'auto',
            marginRight: '15px'
          }} 
        />
        Athletes in Action
      </div>
      <div>
        <Link 
          to="/dashboard" 
          style={{
            color: '#00205B', 
            textDecoration: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '8px',
            backgroundColor: '#FFDC5E', 
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e1b847'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#FFDC5E'}
        >
          Dashboard
        </Link>
        <Link 
          to="/saints" 
          style={{
            color: '#00205B', 
            textDecoration: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '8px',
            backgroundColor: '#FFDC5E', 
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e1b847'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#FFDC5E'}
        >
          Saints
        </Link>
        <button 
          onClick={handleLogout}
          style={{
            color: '#00205B', 
            textDecoration: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '8px',
            backgroundColor: '#FFDC5E', 
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e1b847'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#FFDC5E'}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
