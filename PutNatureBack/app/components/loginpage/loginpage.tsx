'use client'; // Mark the component as client-side

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for client-side routing
import './loginpage.css';

const LoginPage = () => {
  const [showLoginOverlay, setShowLoginOverlay] = useState(true);
  const router = useRouter();

  // Handle navigation using Next.js router
  const handleLinkClick = (url: string) => {
    setShowLoginOverlay(false); // Hide overlay and navigate
    router.push(url);
  };

  return (
    <div>
      {showLoginOverlay && (
        <div className="login-container">
          <h1>Log In</h1>
          <form className="login-form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="your password" required />

            <button type="submit">Log In</button>
          </form>
          <div className="login-links">
            <p>
              Don't have an account?{' '}
              <span onClick={() => handleLinkClick('/signup')}>Sign Up</span>
            </p>
            <p>
              <span onClick={() => handleLinkClick('/forgotpass')}>Forgot Password?</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;