import './info.css';
import Navbar from '../navbar/navbar'; 
import Image from 'next/image';

const Info: React.FC = () => {
  return (
    <div className="info-container">
      <div className="info-navbar">
        <Navbar />
      </div>
      <Image
        src="/masterlogo.png"
        alt="Put Nature Back Logo"
        width={400}
        height={328}
        className="info-logo"
      />
      <div className="info-text-box">
        <p>
          Put Nature Back is a environmentally-conscious start-up founded by Drexel University professor Scott Quitel and run by students across different universities. We believe in a greener, healthier, and more connected world, and we believe in pursuing that mission right in our own backyards.
        </p>
        <p>
          What may start as a small step in the right direction will hopefully bring about positive change on our campus, in our community, and, someday, in our country. Our founder also founded local non-profit LandHealth Institute, with whom we work with to grow a better Philadelphia.
        </p>
        <p>
          Thank you for your support. Thank you for helping us Put Nature Back.
        </p>
        {/* add some retarded funny image or something so it wont look bland */}
      </div>
      <div className="info-team-section">
        <h2 className="team-title">Alpha Sigma Males listed below</h2>
        <ul className="team-list">
          <li>Professor Scott Quitel</li>
          <li>Ryan Deng</li>
          <li>Randy Lim</li>
          <li>Jason Qiu</li>
          <li>Jason Li</li>
          <li>[adding other people later]</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

// note: maybe add like a dim grey line below the navbar or something idfk 
// note: add other people later 