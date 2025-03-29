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
      background: 'linear-gradient(135deg, #00205B, #003B7A)', // Villanova Blue gradient
      color: '#FFFFFF', // White text for contrast
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Villanova Wildcats Logo */}
      <img
        src="https://content.sportslogos.net/logos/35/897/full/villanova_wildcats_logo_secondary_20022239.png"
        alt="Villanova Wildcats Logo"
        style={{
          width: '200px', // Adjust size of logo
          marginBottom: '20px',
        }} 
      />
      
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Adding some shadow for a more dynamic look
      }}>
        Welcome to the Athletes in Action Bible Study Webpage
      </h1>
      <p style={{
        fontSize: '20px',
        marginBottom: '40px',
        fontWeight: 'normal',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Join us as we dive into the Word together and grow in our faith. Whether you're here to log in or register, we are excited to have you with us!
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
      }}>
        <Link to="/login">
          <button style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#003B7A', // Villanova Blue
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '200px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}>
            Login
          </button>
        </Link>

        <Link to="/register">
          <button style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#8DC8E8', // Light blue accent
            color: '#00205B', // Dark blue text
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '200px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
