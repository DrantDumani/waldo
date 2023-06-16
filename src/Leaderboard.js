import React from "react";
import UserTime from "./UserTime";

function Leaderboard({ entries, name }) {
  return (
    <div className="leaderboard-div">
      <h1>{name}</h1>
      <div className="flex-entry-container">
        {entries.length > 0 ? (
          <div className="outer-flex">
            <div className="inner-grid">
              <span>Place</span>
              <span>Name</span>
              <span>Date</span>
              <span>Time</span>
            </div>
            {entries
              .sort((a, b) => a.time - b.time)
              .map((entry, ind) => (
                <div key={entry.gameId} className="inner-grid">
                  <span>{ind + 1}</span>
                  <span data-testid="name-field">{entry.name}</span>
                  <span>{entry.date}</span>
                  <span>{<UserTime time={entry.time} />}</span>
                </div>
              ))}
          </div>
        ) : (
          <p>The Leaderboard is empty! Be the first to submit a score!</p>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
