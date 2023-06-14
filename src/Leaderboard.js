import React from "react";

function Leaderboard({ entries }) {
  return (
    <main>
      <h1>Leaderboard</h1>
      <div>
        {entries.length > 0 ? (
          entries
            .sort((a, b) => a.time - b.time)
            .map((entry) => (
              <div key={entry.id}>
                <span data-testid="name-field">{entry.name}</span>
                <span>{entry.date}</span>
                <span>{entry.time}</span>
              </div>
            ))
        ) : (
          <p>The Leaderboard is empty! Be the first to submit a score!</p>
        )}
      </div>
    </main>
  );
}

export default Leaderboard;
