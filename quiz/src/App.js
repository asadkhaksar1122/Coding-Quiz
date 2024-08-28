import "./App.css";
import { useReducer } from "react";
import Header from "./component/header";
import Starter from "./component/starter";
import quizzes from "./quizdata";
import Question from "./component/question";
import Result from "./component/result";
import Review from "./component/review";
function reducer(state, action) {
  switch (action.type) {
    case "startquiz":
      return { ...state, status: "active" };
    case "review":
      return { ...state, status: "review" };
    case "start":
      return {
        status: "ready",
        question: quizzes,
        index: 0,
        answer: null,
        point: 0,
      };
    case "answer":
      const question = state.question[state.index];
      return {
        ...state,
        answer: action.payload,
        point:
          action.payload == question.correctOptionIndex
            ? state.point + 1
            : state.point,
      };
    case "next":
      if (state.question.length - 1 === state.index) {
        return { ...state, status: "result", index: 0 };
      }
      return { ...state, answer: null, index: state.index + 1 };

    default:
      console.error("Unknown action: ", action);
  }
}
function App() {
  let initialState = {
    status: "ready",
    question: quizzes,
    index: 0,
    answer: null,
    point: 0,
  };
  let [{ status, question, index, answer, point }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <Header />
      {status === "ready" && <Starter dispatch={dispatch} />}
      {status === "active" && (
        <Question
          question={question[index]}
          answer={answer}
          dispatch={dispatch}
        />
      )}
      {status === "result" && (
        <Result dispatch={dispatch} point={point} total={question.length} />
      )}
      {status == "review" && <Review question={question} dispatch={dispatch} ></Review>}
    </>
  );
}

export default App;
