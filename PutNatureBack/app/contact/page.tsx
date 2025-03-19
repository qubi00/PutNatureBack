// page.tsx
import React from 'react';
import Contact from '../components/contact/contact'; // Update this path to match your project structure

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Shared navbar and logo can be included here if not already part of your layout */}
      <Contact />
    </div>
  );
};

export default ContactPage;