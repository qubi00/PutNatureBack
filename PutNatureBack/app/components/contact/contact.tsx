"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './contact.css';
import Image from 'next/image';
import Link from 'next/link';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    const trimmedValue = value.trim();
    setWordCount(trimmedValue ? trimmedValue.split(/\s+/).length : 0);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the word count before submission
    const words = message.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length > 500) {
      alert('Your message exceeds the 500-word limit. Please shorten your message.');
      return;
    }

    setIsLoading(true);
    setStatusMessage('');

    // Create a FormData object from the form (includes hidden fields)
    const formData = new FormData(e.currentTarget);

    try {
      // Submit directly to the Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatusMessage('Your message was sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setReason('');
        setMessage('');
        setWordCount(0);
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('There was an error submitting the form. Please try again later.');
    }

    setIsLoading(false);
  };

  return (
    <div className="contact-page-container">
      <Link href="/" passHref>
        <Image
          src="/masterlogo.png"
          alt="Put Nature Back official logo"
          width={400}
          height={328}
          className="contact-logo"
        />
      </Link>

      <div className="contact-line"></div>

      <div className="contact-container">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>Questions, comments, or concerns? Reach out to a member of our team!</p>
        </header>
        <form onSubmit={handleSubmit}>
          {/* Hidden inputs for Web3Forms */}
          <input type="hidden" name="apikey" value="0a65673b-1174-4160-bb63-3d028c79e499" />
          <input type="hidden" name="recipient" value="putnatureback365@gmail.com" />

          <div className="contact-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-input">
            <label htmlFor="reason">Reason for Contacting</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="contact-input">
            <label htmlFor="message">Message (max 500 words)</label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <div className="word-count">
              <span>{wordCount}</span> / 500
            </div>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="loading-spinner"></span> : 'Send Message'}
          </button>
          {statusMessage && <p className="word-count">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;