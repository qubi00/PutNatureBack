import React from "react";
import Link from "next/link";
import { FaUserCircle, FaShoppingBag, FaSearch } from "react-icons/fa";
import Image from "next/image";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <Link href="/search" className="nav-icon">
            <FaSearch size={20} />
          </Link>
          <Link href="/search" className="nav-icon"/>
          <Link href="/" className="nav-linkouterleft">Home</Link>
          <Link href="/products" className="nav-linkright">Products</Link>

        <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
             <Image
               src="/Love_Teal.png"
               width={115}
               height={100}
               alt="Mock Interview Logo"
               className="w-full h-full object-cover"
             />
          </div>


          <Link href="/about" className="nav-linkleft">About</Link>
          <Link href="/contact" className="nav-linkouterright">Contact</Link>
          <Link href="/login" className="nav-icon">
            <FaUserCircle size={30} />
          </Link>
          <Link href="/cart" className="nav-icon2">
            <FaShoppingBag size={30} />
          </Link>

      </div>
    </nav>
  );
};

export default Navbar;