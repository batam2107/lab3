import React from 'react';

function QuizResult({ result, retry }) {
  return (
    <div className="result-screen">
      <h1>Quiz Ended</h1>
      <h2>Result: {result.percentage}%</h2>
      <p>Selected {result.correct} option(s) out of {result.total} questions</p>
      <button onClick={retry}>Retry</button>
    </div>
  );
}

export default QuizResult;
