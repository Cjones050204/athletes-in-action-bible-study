// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence 
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       
      await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        username: auth.currentUser.email.split('@')[0],
        progress: {},
        reflections: {}
      }, { merge: true });
      navigate('/dashboard');
    } catch (err) {
      console.error("Login error:", err);
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to Bible Study</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} type="submit">Login</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
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
    padding: '20px'
  },
  title: {
    marginBottom: '25px',
    color: '#fff',
    fontSize: '28px',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.25)',
    width: '300px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#003B7A'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  button: {
    marginTop: '15px',
    padding: '12px',
    backgroundColor: '#00509D',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  },
  error: {
    color: '#ff6b6b',
    marginTop: '10px',
    fontSize: '14px',
    textAlign: 'center'
  }
};
