import React from 'react';
import Header from './Header';

const faqs = [
  {
    question: "What is HabitQuest?",
    answer: "HabitQuest is a gamified habit tracker web application that helps users build and maintain daily habits through an engaging interface powered by XP, levels, and a leaderboard system."
  },
  {
    question: "How do I sign up or log in?",
    answer: "From the landing page, you can register or log in. Once authenticated, you're redirected to your dashboard."
  },
  {
    question: "What can I do from the dashboard?",
    answer: "The dashboard lets you add and view habits, track progress with charts and calendars, view achievements, check your profile, and access the leaderboard."
  },
  {
    question: "How do I add a new habit?",
    answer: "Click on 'Add Habit' from the dashboard. You can define its name, frequency, and category. Each habit has a dedicated page for detailed tracking."
  },
  {
    question: "How does the XP system work?",
    answer: "You earn +10 XP for each completed habit. XP helps you level up and climb the leaderboard, motivating consistent habit building."
  },
  {
    question: "What is the leaderboard feature?",
    answer: "The leaderboard ranks all users based on their XP and levels, adding a fun, competitive element to habit tracking."
  },
  {
    question: "How can I track my habit progress?",
    answer: "Each habit includes a calendar, dynamic charts, stat cards, and tables to help visualize and monitor your progress."
  },
  {
    question: "Can I add multiple habits?",
    answer: "Yes, you can add an unlimited number of habits across various categories."
  },
  {
    question: "What technologies power HabitQuest?",
    answer: "The frontend is built with React.js, React Bootstrap, Chart.js, Material UI, and Bootstrap. The backend uses JSON Server."
  },
  {
    question: "Is HabitQuest available as a mobile app?",
    answer: "Currently, HabitQuest is web-based, but it works smoothly on mobile browsers thanks to its responsive design."
  }
];

function Faq() {
  return (
    <>
    <Header/>
      <div className="container mt-5">
        <h2 className="mb-4" style={{ color: 'purple' }}>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-3" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${index}`}
                  style={{ fontWeight: 'bold' }}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ color: 'black' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
