import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import Main from "./Main";
import StartScreen from "./StartScreen";
import { useEffect } from "react";
import { useReducer } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

const intialState = {
  questions: [],
  //'Loading' , "Error" , "ready" "active" "finsh"
  status: "Loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    default:
      throw new Error("ERROR");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, intialState);
  const numQuestion = questions.length;

  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {" "}
        {status === "Loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestion={numQuestion} />}
      </Main>
    </div>
  );
}
