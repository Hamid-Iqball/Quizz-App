// import Header from "./Header";

export default function Progress({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress ">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1} </strong>/{numQuestion}{" "}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}
