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
        src="/philly.jpg" 
        alt="Home Image" 
        width={600} 
        height={400} 
        className="home-image" 
      />
    </div>
  );
};

export default Home;