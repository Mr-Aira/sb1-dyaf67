import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is AstroBirthday?",
      answer: "AstroBirthday is a website that combines astrology and birthday celebrations, offering personalized zodiac information, birthday countdowns, and cosmic insights."
    },
    {
      question: "How accurate are the zodiac sign predictions?",
      answer: "Our zodiac sign information is based on traditional astrological interpretations. While many find them insightful, remember that astrology is for entertainment purposes."
    },
    {
      question: "Can I save my birthday information for future visits?",
      answer: "We're working on implementing user accounts that will allow you to save your information and preferences for future visits. Stay tuned for updates!"
    },
    {
      question: "How often are horoscopes updated?",
      answer: "Once implemented, our horoscopes will be updated daily. We'll also offer weekly and monthly predictions for a broader cosmic perspective."
    },
    {
      question: "Is my personal information safe?",
      answer: "We take your privacy seriously. Any personal information you provide is used solely for enhancing your experience on AstroBirthday and is never shared with third parties."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-indigo-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;