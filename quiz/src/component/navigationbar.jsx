import React from 'react'

export default function Navigation({index,total}) {
     const percentage = (Number(index) / total) * 100;
  return (
    <div className="score-container">
      <div
        className="score-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: getBarColor(percentage),
        }}
      >
        {percentage.toFixed(2)}%
      </div>
    </div>
  );
}

function getBarColor(percentage) {
  if (percentage >= 90) return "green";
  if (percentage >= 70) return "blue";
  if (percentage >= 50) return "orange";
  return "red";
}