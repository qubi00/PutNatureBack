"use client";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const isBlackNavbar =
    pathname === "/about" ||
    pathname === "/products" ||
    pathname === "/contact" ||
    pathname === "/shopping-bag" ||
    pathname === "/login";

  return (
    <html lang="en">
      <body>
        <Navbar textColor={isBlackNavbar ? "black" : "white"} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
