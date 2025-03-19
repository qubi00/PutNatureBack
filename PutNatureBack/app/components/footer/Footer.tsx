"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Column: Logo */}
        <div className="footer-logo">
          <Image
            src="/BlackOfficialPNB.png" 
            alt="BlackOfficialPNB Logo"
            width={150}
            height={120}
            objectFit="contain"
          />
        </div>
        {/* Center Column: Navigation Links */}
        <div className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        {/* Right Column: Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=100078870797472#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/putnatureback/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/putnatureback"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
