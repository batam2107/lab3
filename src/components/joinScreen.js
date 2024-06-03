import React from 'react';

function JoinScreen({ start }) {
  return (
    <div className="join-screen">
      <h2>Quiz-App</h2>
      <p>Welcome to my challenge</p>
      <button onClick={start}>Start</button>
    </div>
  );
}

export default JoinScreen;
