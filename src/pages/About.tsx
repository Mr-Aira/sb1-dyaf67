import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About AstroBirthday</h1>
      <p className="mb-4">
        Welcome to AstroBirthday, your cosmic connection to the stars and your special day! We're passionate about bringing the magic of astrology and the excitement of birthdays together in one captivating experience.
      </p>
      <p className="mb-4">
        Our mission is to provide you with a personalized journey through the zodiac, helping you discover the unique celestial influences that shape your life and personality. Whether you're a seasoned astrology enthusiast or just curious about the cosmic forces at play, AstroBirthday has something special for everyone.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personalized birthday countdowns</li>
        <li>Detailed zodiac sign information</li>
        <li>Birthstone and birth flower insights</li>
        <li>Custom zodiac-themed birthday cards</li>
        <li>Daily, weekly, and yearly horoscopes</li>
        <li>Astrology blog with expert insights</li>
      </ul>
      <p className="mb-4">
        Join us on this celestial journey and unlock the secrets written in the stars for you. Let AstroBirthday be your guide to a more insightful, connected, and magical celebration of your special day!
      </p>
    </div>
  );
};

export default About;