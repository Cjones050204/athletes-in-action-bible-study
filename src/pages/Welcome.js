import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const handleMouseEnter = (e) => (e.target.style.backgroundColor = '#FFD700');
  const handleMouseLeave = (e) => (e.target.style.backgroundColor = '#00509D');

  return (
    <div style={styles.container}>
      {/* Villanova Wildcats Logo */}
      <img
        src="https://content.sportslogos.net/logos/35/897/full/villanova_wildcats_logo_secondary_20022239.png"
        alt="Villanova Wildcats Logo"
        style={styles.logo}
      />

      <h2 style={styles.title}>Welcome to Athletes in Action Bible Study</h2>

      {/* Group Info Box */}
      <div style={styles.infoBox}>
        <p style={styles.description}>
          Join us Thursday nights at 7:30pm in the Haverford Room as we grow closer to God through Scripture.
        </p>
      </div>
      
      <div style={styles.buttonContainer}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button
            style={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Login
          </button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button
            style={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg, #00509D, #74C0FC)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  logo: {
    width: '180px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '15px',
    color: '#fff',
    fontSize: '36px',
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  description: {
    fontSize: '20px',
    fontWeight: '400',
    textAlign: 'center',
    color: '#003B7A',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#00509D',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '200px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
};
