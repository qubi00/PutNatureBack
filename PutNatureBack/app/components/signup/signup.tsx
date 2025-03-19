'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="your full name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="your email" required />

        <label htmlFor="password">Password</label>
        <div className="input-container">
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            name="password" 
            placeholder="your password" 
            required 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ color: 'black' }} />
          </button>
        </div>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input-container">
          <input 
            type={showConfirmPassword ? 'text' : 'password'} 
            id="confirmPassword" 
            name="confirmPassword" 
            placeholder="confirm password" 
            required 
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} style={{ color: 'black' }} />
          </button>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/loginpage">log in</Link>
      </p>
    </div>
  );
};

export default SignUp;