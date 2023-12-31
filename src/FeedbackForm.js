import React from 'react';

const FeedbackForm = ({ recipient, subject }) => {
  const handleFeedback = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">We value your feedback!</h2>
      <p className="Paragraph">
        If you have any suggestions, questions, or comments
      </p>
      <p className="Paragraph">
        regarding our Pedagogic Quran E-Book, please let us know by filling out
      </p>
      <p className="Paragraph">
        the form below. Your feedback will help us improve our service. Thank
        you so much!
      </p>
      <button className="feedback-button" onClick={handleFeedback}>
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
