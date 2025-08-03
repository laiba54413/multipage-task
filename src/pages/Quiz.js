import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: [],
    features: [],
    style: '',
    budget: '',
    timeline: '',
    other: '',
    notes: '',
  });

  const totalSteps = 6;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', form);
    alert('Thanks for sharing your vision!');
  };

  return (
    <div className="quiz">
      <header className="quiz-header">
        <h1>Website Project Quiz</h1>
        <p>Step {step} of {totalSteps}</p>
      </header>

      <form onSubmit={handleSubmit} className="quiz-form">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="form-step">
            <h2>What kind of website do you need?</h2>
            {['Business Landing Page', 'E-commerce Store', 'Portfolio/Showcase', 'Blog', 'Booking/Scheduling'].map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  name="type"
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
            <input
              type="text"
              name="other"
              placeholder="Other (optional)"
              onChange={handleChange}
              className="input"
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="form-step">
            <h2>Which features are essential?</h2>
            {['Contact Form', 'Live Chat', 'Payments', 'Login/Register', 'Admin Panel', 'SEO'].map((feature) => (
              <label key={feature}>
                <input
                  type="checkbox"
                  name="features"
                  value={feature}
                  onChange={handleChange}
                />
                {feature}
              </label>
            ))}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="form-step">
            <h2>Preferred design style?</h2>
            {['Clean & Minimal', 'Modern & Bold', 'Corporate', 'Creative'].map((style) => (
              <label key={style}>
                <input
                  type="radio"
                  name="style"
                  value={style}
                  onChange={handleChange}
                />
                {style}
              </label>
            ))}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="form-step">
            <h2>Your estimated budget?</h2>
            {['Under $500', '$500–$1,000', '$1,000–$3,000', '$3,000+'].map((budget) => (
              <label key={budget}>
                <input
                  type="radio"
                  name="budget"
                  value={budget}
                  onChange={handleChange}
                />
                {budget}
              </label>
            ))}
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="form-step">
            <h2>Project timeline?</h2>
            {['1–2 weeks', '3–4 weeks', '1–2 months', 'Flexible'].map((time) => (
              <label key={time}>
                <input
                  type="radio"
                  name="timeline"
                  value={time}
                  onChange={handleChange}
                />
                {time}
              </label>
            ))}
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="form-step">
            <h2>Anything else you'd like to mention?</h2>
            <textarea
              name="notes"
              rows="4"
              placeholder="Leave us a note..."
              onChange={handleChange}
              className="input"
            ></textarea>
          </div>
        )}

        {/* Navigation */}
        <div className="form-nav">
          {step > 1 && (
            <button type="button" onClick={handleBack} className="btn secondary">
              Back
            </button>
          )}
          {step < totalSteps ? (
            <button type="button" onClick={handleNext} className="btn primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn primary">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Quiz;
