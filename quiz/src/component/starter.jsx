import React from "react";
import "./starter.css";


export default function Starter({dispatch}) {
  return (
    <div className="starter">
      <div className="starter">
        <h1>Start the Quiz</h1>
        <p>
          Welcome to our exciting quiz challenge! This quiz is designed to test
          your knowledge across a variety of topics. Whether you're a trivia
          enthusiast or just looking to learn something new, this quiz is
          perfect for you. Each question has been carefully crafted to challenge
          your understanding and provide you with an opportunity to showcase
          your skills.
          <br />
          <br />
          As you progress through the quiz, you'll encounter questions that
          range from easy to difficult, covering subjects such as history,
          science, literature, and more. Don't worry if you don't know all the
          answers; this is a great chance to learn and expand your horizons.
          <br />
          <br />
          Remember, the goal is not just to get a perfect score but to enjoy the
          process and discover new information. So take a deep breath, relax,
          and get ready to embark on this intellectual adventure. Click the
          button below to start the quiz and see how much you really know. Good
          luck, and have fun!
        </p>
        <button onClick={()=>dispatch({type:"startquiz"})} >Start Quiz</button>
      </div>
    </div>
  );
}
