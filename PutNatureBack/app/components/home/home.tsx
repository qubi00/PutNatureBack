import './home.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Put Nature Back</h1>
      <p>OUR NAME IS OUR MISSION</p>

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