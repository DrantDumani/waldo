import { addEntryToLeaderboard, getSwearWords } from "./firebaseConfig";
import InputName from "./InputName";
import { useNavigate } from "react-router-dom";

function InputNameContainer({ time, plyrName, confirmNameChange }) {
  const navigate = useNavigate();
  const censorNames = async (name) => {
    const censoredWords = await getSwearWords();
    for (let word of censoredWords) {
      const reg = new RegExp(word, "i");
      if (reg.test(name)) {
        return "BlockMatter";
      }
    }
    return name;
  };

  const handleSubmit = async (time, name) => {
    const validName = await censorNames(name);
    const date = new Date();
    const dateStr =
      date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
    const entry = {
      name: validName,
      date: dateStr,
      time: time,
    };
    addEntryToLeaderboard(entry);
    return navigate("/leaderboards");
  };

  return (
    <InputName
      time={time}
      name={plyrName}
      confirmNameChange={confirmNameChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default InputNameContainer;
