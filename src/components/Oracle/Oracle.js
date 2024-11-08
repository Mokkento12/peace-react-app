import React from "react";

import "./Oracle.css";

const Oracle = () => {
  return (
    <div className="oracle">
      <h2 className="oracle-title">WHY Private Oracle?</h2>
      <div className="oracle-container">
        <div className="oracle-column">
          <img src="img/icon.svg" alt="Messege" className="oracle-image"></img>
          <h3 className="oracle-column-title">Best Online Psychics</h3>
          <p className="oracle-column-text">
            The quality of our psychic mediums is unmatched. Applicants must go
            through a rigorous screening process and an intensive background
            search, which means you can be sure that our team of gifted psychic
            advisors is the very best of the best.
          </p>
        </div>

        <div className="oracle-column">
          <img src="img/icon.svg" alt="Messege" className="oracle-image"></img>
          <h3 className="oracle-column-title">Real Psychic Reviews</h3>
          <p className="oracle-column-text">
            Did you know that all of our psychic reviews are testimonials from
            actual clients? Read about the positive experiences of others and
            treat yourself to a psychic reading with one of our accurate psychic
            advisors.
          </p>
        </div>

        <div className="oracle-column">
          <img src="img/icon.svg" alt="Messege" className="oracle-image"></img>
          <h3 className="oracle-column-title">Satisfaction Guaranteed</h3>
          <p className="oracle-column-text">
            We've delivered over 5 million discreet and confidential psychic
            readings since 1995, and we're here for you 24/7/365. A powerful
            psychic connection is just a call away. Plus, if it's not the very
            best psychic reading you've ever had, it's FREE!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oracle;
