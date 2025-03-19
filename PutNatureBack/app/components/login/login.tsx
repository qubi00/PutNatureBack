"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import './login.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", identifier, password);
    setStatusMessage("Login functionality not implemented yet.");
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <label htmlFor="identifier">Email or Username</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
        <div className="login-links">
          <Link href="/forgotpass">Forgot Password?</Link>
          <span> | </span>
          <Link href="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
