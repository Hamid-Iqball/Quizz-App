export default function StartScreen({ numQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quizz</h2>
      <h3>{numQuestion} questions to test your React Mastry</h3>
      <button className="btn btn-ui"> Let's Start</button>
    </div>
  );
}
