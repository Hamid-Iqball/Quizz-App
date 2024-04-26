import { type } from "@testing-library/user-event/dist/type";

export default function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quizz</h2>
      <h3>{numQuestion} questions to test your React Mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Let's Start
      </button>
    </div>
  );
}
