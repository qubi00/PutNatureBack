import React, { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import LoginModal from "../login/login";
import "./navbar.css";

const Navbar: React.FC<{ textColor: string }> = ({ textColor }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const linkStyle = {
    color: textColor,
    textDecoration: "none",
  };

  const hoverStyle = {
    color: "#0070f3",
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <div className="navbar-left">
            <li className="navbar-item-a">
              <Link href="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="navbar-item-a">
              <Link href="/products" style={linkStyle}>
                Products
              </Link>
            </li>
          </div>

          <div className="navbar-right">
            <li className="navbar-item-a">
              <Link href="/about" style={linkStyle}>
                About Us
              </Link>
            </li>
            <li className="navbar-item-a">
              <Link href="/contact" style={linkStyle}>
                Contact Us
              </Link>
            </li>
            <li className="navbar-item-bag">
              <Link href="/shopping-bag">
                <FaShoppingBag size={24} style={linkStyle} />
              </Link>
            </li>
            <li className="navbar-item-login">
              <button
                onClick={() => setIsLoginOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <FaUserCircle size={24} style={linkStyle} />
              </button>
            </li>
          </div>
        </ul>
        <style jsx>{`
          a:hover {
            color: ${hoverStyle.color} !important;
          }
          svg:hover {
            color: ${hoverStyle.color} !important;
          }
        `}</style>
      </nav>
      {isLoginOpen && (
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      )}
    </>
  );
};

export default Navbar;