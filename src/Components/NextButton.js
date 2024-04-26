import { type } from "@testing-library/user-event/dist/type";

export default function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return;
  if (index < numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
  }
}
