import React from "react";
import "./starter.css";


export default function Starter({dispatch}) {
  return (
    <div className="starter">
      <div className="starter">
        <h1>Start the Quiz</h1>
        <p>
          Welcome to our thrilling coding challenge! This quiz is crafted to
          test your programming knowledge across a variety of topics. Whether
          you're a coding enthusiast or eager to expand your skills, this quiz
          is perfect for you. Each question is designed to push your coding
          understanding and give you a chance to showcase your abilities.
          <br />
          <br />
          As you progress through the quiz, you'll encounter questions that vary
          in difficulty, covering subjects such as algorithms, data structures,
          and software development concepts. Don't worry if you don't know every
          answer; this is a fantastic opportunity to learn and enhance your
          coding prowess.
          <br />
          <br />
          The aim is not just to achieve a perfect score, but to enjoy the
          experience and gain new insights. So, take a deep breath, relax, and
          get ready to embark on this coding journey. Click the button below to
          start the quiz and put your coding skills to the test. Good luck, and
          enjoy the challenge
        </p>

        <div className="categrydiv">
          <p>
            <strong> Select Categry</strong>
          </p>
          <select
            name="categry"
            id="categry"
            className="categry"
            onChange={(e) =>
              dispatch({ type: "categry", payload: e.target.value })
            }
          >
            <option value="JavaScript" selected>
              JavaScript
            </option>
            <option value="Python">Python</option>
            <option value="Flask">Flask</option>
            <option value="CSS">CSS</option>
            <option value="React">React</option>
            <option value="HTML">HTML</option>
            <option value="Django">Django</option>
            <option value="Express">Express</option>
            <option value="MongoDB">MongoDB</option>
            <option value="MySQL">MySQl</option>
          </select>
        </div>
        <button onClick={() => dispatch({ type: "startquiz" })}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
