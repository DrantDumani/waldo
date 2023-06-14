import React from "react";

function Leaderboard({ entries }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      <div>
        {entries.length > 0 ? (
          entries
            .sort((a, b) => a.time - b.time)
            .map((entry) => (
              <div key={entry.gameId}>
                <span data-testid="name-field">Name: {entry.name}</span>
                <span>{entry.date}</span>
                <span>{entry.time}</span>
              </div>
            ))
        ) : (
          <p>The Leaderboard is empty! Be the first to submit a score!</p>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
