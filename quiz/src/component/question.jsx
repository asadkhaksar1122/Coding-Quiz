import React from 'react'
import './question.css'
export default function Question({question,dispatch,answer}) {
    let wrongaudio = new Audio("buzzer-or-wrong-answer-20582.mp3");
    console.log(question)
    // if (answer && answer!=question.correctOptionIndex){
    //     wrongaudio.play()  
    // }
  return (
    <div className="maincontainer">
      <div className="question">{question.question}</div>
      <div className="buttons">
        {question.options.map((option, index) => (
          <button
            className={`option ${answer == index  && "selected"} ${
             answer ? question.correctOptionIndex
            ==index ? "right" : "wrong":""}`}
            disabled={answer}
            onClick={() => {
              dispatch({ type: "answer", payload:index===0?"0":index });
            }}
            key={index}
          >
            {option}
          </button>
        ))}
      </div>
     {answer && <div className="nextbtn">
        <button onClick={()=>dispatch({type:'next'})} >Next</button>
      </div>}
    </div>
  );
}
