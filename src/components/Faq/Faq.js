import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How do I know someone is thinking about me?",
    answer: "Sometimes, you feel a sudden rush of emotions...",
  },
  {
    question: "How do I get through a breakup?",
    answer: "Breakups are tough, but time and self-care can heal...",
  },
  {
    question: "How do I get the best reading?",
    answer: "To get the best reading, approach with an open mind...",
  },
  {
    question: "What do I need to know before my first reading?",
    answer: "Before your first reading, relax and think about...",
  },
  {
    question: "What are the different types of psychic readings?",
    answer: "Readings come in many forms, including tarot, astrology...",
  },
  {
    question: "How can I start a reading for free?",
    answer: "Many platforms offer first readings free or at a discount...",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq-container">
        <h2 id="faq-title" className="faq-title">
          Love, Relationship, and Life FAQs
        </h2>
        <p className="faq-text">
          You've finally decided to take the leap and talk to a psychic
          (great!), but perhaps you're still feeling a bit confused about online
          readings, whether or not they are safe, or how to choose the best Keen
          psychic to meet your needs. We're here to put your mind at ease so
          that you can get the most out of your reading - every single time.
        </p>
        <div className="faq-links">
          <div className="faq-links-left">
            {faqData.slice(0, 3).map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={expandedIndex === index}
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                </button>
                {expandedIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="faq-links-right">
            {faqData.slice(3).map((item, index) => (
              <div key={index + 3} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={expandedIndex === index + 3}
                  onClick={() => toggleFaq(index + 3)}
                >
                  {item.question}
                </button>
                {expandedIndex === index + 3 && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
