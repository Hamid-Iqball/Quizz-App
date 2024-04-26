export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "💰";
  if (percentage > 50 && percentage < 100) emoji = "🍕";
  if (percentage > 0 && percentage < 50) emoji = "🙁";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji} </span> your score is <strong>{points}</strong> out of{" "}
        {maxPossiblePoints}. ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points) </p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </>
  );
}
