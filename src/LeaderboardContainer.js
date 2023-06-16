import Leaderboard from "./Leaderboard";
import { getLeaderBoardEntries } from "./firebaseConfig";
import { useEffect, useState } from "react";

function LeaderboardContainer({ gameName }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async (gameName) => {
      const newEntries = await getLeaderBoardEntries(gameName);
      setEntries(newEntries);
    };
    fetchEntries(gameName);
  }, [gameName]);

  return <Leaderboard entries={entries} name={gameName} />;
}

export default LeaderboardContainer;
