import Link from "next/link";
import { FaUserCircle, FaShoppingBag } from 'react-icons/fa';
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">

        <div className="navbar-group-a">
            <li className="navbar-item-a">
                <Link href="/">Home</Link>
            </li>
            <li className="navbar-item-a">
                <Link href="/products">Products</Link>
            </li>
        </div>

        <div className="navbar-group-b">
          <li className="navbar-item-a">
            <Link href="/about">About Us</Link>
          </li>
          <li className="navbar-item-a">
            <Link href="/contact">Contact Us</Link>
          </li>
        </div>

        <div className="navbar-group-c">
          <li className="navbar-item-b">
            <Link href="/">
              <FaShoppingBag size={30} />
            </Link>
          </li>
          <li className="navbar-item-b">
            <Link href="/login">
              <FaUserCircle size={30} style={{ borderRadius: '50%', padding: '10px' }} />
            </Link>
          </li>
        </div>

      </ul>
    </nav>
  );
};

export default Navbar;