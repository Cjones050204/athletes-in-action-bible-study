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
      fontFamily: 'Arial, sans-serif',
      padding: '0 20px',
    }}>
      {/* Villanova Wildcats Logo */}
      <img
        src="https://content.sportslogos.net/logos/35/897/full/villanova_wildcats_logo_secondary_20022239.png"
        alt="Villanova Wildcats Logo"
        style={{
          width: '200px', // Adjust size of logo
          marginBottom: '30px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Adding shadow for depth
        }} 
      />
      
      <h1 style={{
        fontSize: '50px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)', // Adding some shadow for a more dynamic look
        textAlign: 'center',
      }}>
        Welcome to the Athletes in Action Webpage
      </h1>
      <p style={{
        fontSize: '22px',
        marginBottom: '40px',
        fontWeight: 'normal',
        textAlign: 'center',
        maxWidth: '600px',
        lineHeight: '1.6', // Improved readability with more space between lines
      }}>
        Join us Thursday nights at 7:30pm in the Haverford Room in the Connelly Center as we grow closer to God through Scripture.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}>
        <Link to="/login">
          <button style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#003B7A', // Villanova Blue
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '220px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#00205B'} // Darker blue on hover
            onMouseLeave={(e) => e.target.style.backgroundColor = '#003B7A'} // Original blue on hover out
          >
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
            borderRadius: '8px',
            cursor: 'pointer',
            width: '220px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#74B8D9'} // Lighter blue on hover
            onMouseLeave={(e) => e.target.style.backgroundColor = '#8DC8E8'} // Original blue on hover out
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
