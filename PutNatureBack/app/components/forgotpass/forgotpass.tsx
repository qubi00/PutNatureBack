import React from 'react';
import Link from 'next/link';
import './forgotpass.css';

const ForgotPass = () => {
  return (
    <div className="forgot-container">
      <h1>Forgot Password</h1>
      <form className="forgot-form">
        <label htmlFor="email">Enter Your Email Address</label>
        <input type="email" id="email" name="email" placeholder="your email" required />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remember your password? <Link href="/loginpage">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPass;