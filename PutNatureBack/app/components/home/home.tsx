"use client";

import './home.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Home: React.FC = () => {
  const scrollToSection = () => {
    const section = document.querySelector('.white-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach((section) => observer.observe(section));

    return () => {
      contentSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-container">
      <div className="full-title">
        <h1 className="title">Put Nature Back</h1>
        <p className="subtitle">Restoring Earth's Natural Balance</p>
      </div>

      <Image 
        src="/pnbhome.png" 
        alt="Home Image" 
        width={1920} 
        height={1080} 
        className="home-image" 
      />
      {/* Down Arrow */}
      <div onClick={scrollToSection}>
        <Image 
          src="/downarrow.png" 
          alt="Down Arrow" 
          width={400} 
          height={328} 
          className="home-arrow" 
        />
      </div>

      {/* White Background Section */}
      <div className="white-section">
        <h2 className="section-title">Our Mission: To restore and preserve the natural balance of our planet through sustainable practices and environmental stewardship.</h2>
        
        {/* First Image and Text */}
        <div className="content-section">
          <Image 
            src="/bookstorepnb.png" 
            alt="Bookstore Image" 
            width={300} 
            height={200} 
            className="content-image"
          />
          <div className="content-text">
            <h2>Our Products</h2>
            <p>Responsibly sourced and safely screenprinted, our products are crafted on-demand. Featuring a range of upcycled goods and housewares, we prioritize sustainability to minimize our environmental impact while delivering top-quality items you can trust.</p>
          </div>
        </div>

        {/* Second Image and Text */}
        <div className="content-section reverse">
          <Image 
            src="/phillypnb.png" 
            alt="Philly Image" 
            width={300} 
            height={200} 
            className="content-image"
          />
          <div className="content-text">
            <h2>Putting Nature Back</h2>
            <p>Our planet provides us with so much, but now she needs our assistance. Urban areas consume approximately two-thirds of the world's energy and are responsible for over 70% of global CO₂ emissions. Our current lifestyle is harming the Earth, but by taking steps to protect and restore nature in our cities and surrounding areas, we can make a significant and vital contribution to improving the planet's health.</p>
          </div>
        </div>

        {/* Third Image and Text */}
        <div className="content-section">
          <Image 
            src="/grasspnb.png" 
            alt="Grass Image" 
            width={300} 
            height={200} 
            className="content-image"
          />
          <div className="content-text">
            <h2>Philly: Untapped</h2>
            <p>As one of America's oldest cities, Philadelphia was developed with limited integration of natural spaces. Today, the city faces challenges in reintroducing nature, with approximately 40,000 vacant lots—over 74% of which are privately owned—lacking development plans. At Put Nature Back, we view these vacant spaces as opportunities to enhance Philadelphia and its surrounding areas, making them greener, healthier, and more accommodating for both people and wildlife.</p>
          </div>
        </div>

        {/* Fourth Image and Text */}
        <div className="content-section reverse">
          <Image 
            src="/peoplepnb.png" 
            alt="People Image" 
            width={300} 
            height={200} 
            className="content-image"
          />
          <div className="content-text">
            <h2>Make Your Dollar Mean More</h2>
            <p>Unlike most eco-conscious companies that only allocate a portion of their profits to making a difference, we take a more direct approach. We believe your money should support the causes you care about. That's why 10% of every dollar you spend goes directly toward creating a positive impact in our community and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;