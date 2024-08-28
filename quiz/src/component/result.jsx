import React from 'react'
import "./result.css"


export default function Result({ point, dispatch, total }) {
  const percentage = (Number(point) / total) * 100;
  let feedback;
  let feedbackDetails;

  if (percentage >= 90) {
    feedback = "Outstanding!";
    feedbackDetails = "You have an excellent grasp of the material.";
  } else if (percentage >= 80) {
    feedback = "Excellent!";
    feedbackDetails = "Great job! Keep up the good work.";
  } else if (percentage >= 70) {
    feedback = "Very Good!";
    feedbackDetails = "You did well, but there's room for improvement.";
  } else if (percentage >= 60) {
    feedback = "Good job!";
    feedbackDetails = "Not bad, but you can do better.";
  } else if (percentage >= 50) {
    feedback = "Fair!";
    feedbackDetails = "You passed, but consider reviewing the material.";
  } else {
    feedback = "Better luck next time!";
    feedbackDetails = "Don't be discouraged. Keep studying and you'll improve.";
  }

  return (
    <div className="mainresult">
      <div className="score-container">
        <div className="score-bar" style={{ width: `${percentage}%`, backgroundColor: getBarColor(percentage) }}>
          {percentage.toFixed(2)}%
        </div>
      </div>
      <div className="score-details">
        <p>Total Questions: {total}</p>
        <p>Correct Answers: {point}</p>
        <p>Score: {percentage.toFixed(2)}%</p>
        <p>Feedback: {feedback}</p>
        <p>{feedbackDetails}</p>
      </div>
      <div className="actions">
        <button className='resultbtn' onClick={() => dispatch({ type: 'start' })}>Retry</button>
        <button className='resultbtn review' onClick={() => dispatch({ type: 'review' })}>Review Answers</button>
      </div>
    </div>
  );
}

function getBarColor(percentage) {
  if (percentage >= 90) return 'green';
  if (percentage >= 70) return 'blue';
  if (percentage >= 50) return 'orange';
  return 'red';
}
