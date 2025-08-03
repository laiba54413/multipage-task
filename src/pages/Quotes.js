import React from 'react';
import './Quotes.css';

function Quotes() {
  return (
    <div className="quotes-container">
      <div className="quote-card">
        <p className="quote-text">
          “Design must reflect the practical and aesthetic in business but above all... good design must primarily serve people.”
        </p>
        <div className="quote-author">– Thomas Watson</div>
      </div>

      <div className="quote-card">
        <p className="quote-text">
          “It's not important to develop your own style but your own approach.”
        </p>
        <div className="quote-author">– Massimo Vignelli</div>
      </div>

      <div className="quote-card">
        <p className="quote-text">
          “Luck is the residue of opportunity and design.”
        </p>
        <div className="quote-author">– Branch Rickey</div>
      </div>
    </div>
  );
}

export default Quotes;

