import React from 'react';
import './review.css'; // Import the CSS file

export default function Review({ question,dispatch }) {
  return (
    <div className="review-container">
      {question.map((onequestion, index) => (
        <div key={index} className="question-block">
          <div className="question-text">{onequestion.question}</div>
          <div className="options">
            {onequestion.options.map((option, idx) => (
              <div
                key={idx}
                className={`option2 ${idx === onequestion.correctOptionIndex ? 'correct' : ''}`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="reviewbtn">
        <button className='resultbtn' onClick={()=>dispatch({type:'start'})} >Try</button>
      </div>
    </div>
  );
}
