import './info.css';
import Image from 'next/image';

const Info: React.FC = () => {
  return (
    <div className="info-container">
      <Image
        src="/masterlogo.png"
        alt="Put Nature Back Logo"
        width={400}
        height={328}
        className="info-logo"
      />

      <div className="info-line"></div>

      <div className="info-text-box">
        <p>
          Put Nature Back is an environmentally-conscious start-up founded by Drexel University professor Scott Quitel and run by students across different universities. We believe in a greener, healthier, and more connected world, and we believe in pursuing that mission right in our own backyards.
        </p>
        <p>
          What may start as a small step in the right direction will hopefully bring about positive change on our campus, in our community, and, someday, in our country. Our founder also founded local non-profit LandHealth Institute, with whom we work to grow a better Philadelphia.
        </p>
        <p>
          Thank you for your support. Thank you for helping us Put Nature Back.
        </p>
      </div>

      {/* Sigmas */}
      <div className="info-team-section">
        <h2 className="team-title">Thanks to Our Wonderful Team</h2>
        <ul className="team-list">
          <li>Professor Scott Quitel</li>
          <li>Ryan Deng</li>
          <li>Randy Lim</li>
          <li>Jason Qiu</li>
          <li>Jason Li</li>
          <li>Steven Cen</li>
          <li>Zhen Yu Zhang</li>
          <li>Selena Yee</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;