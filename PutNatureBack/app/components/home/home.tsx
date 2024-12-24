import './home.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="home-container">
        <div className = "full-title">
            <h1 className = "title">Put Nature Back</h1>
            <p className = "subtitle">OUR NAME IS OUR MISSION</p>
        </div>

      <Image 
        src="/pnbhome.png" 
        alt="Home Image" 
        width={2560} 
        height={1440} 
        className="home-image" 
      />
      <Image 
        src="/masterlogo.png" 
        alt="Home Logo" 
        width={400} 
        height={328} 
        className="home-logo" 
      />
      <Image 
        src="/downarrow.png" 
        alt="Home Logo" 
        width={400} 
        height={328} 
        className="home-arrow" 
      />
    </div>
  );
};

export default Home;