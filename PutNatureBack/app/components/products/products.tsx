import './products.css';
import Image from 'next/image';
import Link from 'next/link';

const Products: React.FC = () => {
  return (
    <div className="products-container">
      {/* Logo (Links back to Home) */}
      <Link href="/" passHref>
        <Image
          src="/masterlogo.png"
          alt="Put Nature Back Logo"
          width={400}
          height={328}
          className="products-logo"
        />
      </Link>

      {/* Horizontal Line */}
      <div className="products-line"></div>

      {/* Content Section */}
      <div className="products-content">
        {/* Bear Image */}
        <Image
          src="/bearpnb.png"
          alt="Sad Polar Bear"
          width={500}
          height={500}
          className="products-bear"
        />

        {/* Title */}
        <h2 className="products-title">No Products... Yet</h2>

        {/* Text Box */}
        <div className="products-text-box">
          <p>
            It looks like there’s nothing here for now. But don’t worry, 
            we’re working on something special! Soon, you'll be able to browse 
            and shop products that help us Put Nature Back.
          </p>
          <p>
            In the meantime, why not explore our mission and see how we’re 
            trying to make a difference?
          </p>
          <p>
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;