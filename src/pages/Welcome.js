import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation

export default function Welcome() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #00509D, #74C0FC)',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome to the Athletes in Action Bible Study Webpage</h1>
      <p>Join us as we dive into the Word together and grow in our faith.</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', backgroundColor: '#8DC8E8', color: '#00205B', border: 'none', borderRadius: '5px' }}>
            Login
          </button>
        </Link>
        <Link to="/register">
          <button style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', backgroundColor: '#8DC8E8', color: '#00205B', border: 'none', borderRadius: '5px' }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
