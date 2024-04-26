export default function Option({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((options, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {options}{" "}
        </button>
      ))}
    </div>
  );
}
