import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AdvisorsPage.css";

const advisors = [
  {
    id: 1,
    name: "John Smith",
    specialization: "Finance Advisor",
    image: "/img/advisors/advisor1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    specialization: "Legal Advisor",
    image: "/img/advisors/advisor2.jpg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    specialization: "IT Consultant",
    image: "/img/advisors/advisor3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    specialization: "Marketing Specialist",
    image: "/img/advisors/advisor4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    specialization: "Business Analyst",
    image: "/img/advisors/advisor5.jpg",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    specialization: "HR Expert",
    image: "/img/advisors/advisor6.jpg",
  },
];

const AdvisorsPage = () => {
  return (
    <div className="advisors-page">
      <Header />
      <div className="advisors-container">
        <h1 className="advisors-title">Our Advisors</h1>
        <div className="advisors-cards">
          {advisors.map((advisor) => (
            <div key={advisor.id} className="advisor-card">
              <img
                src={advisor.image}
                alt={`${advisor.name} - ${advisor.specialization}`}
                className="advisor-image"
              />
              <h2>{advisor.name}</h2>
              <p>{advisor.specialization}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvisorsPage;
