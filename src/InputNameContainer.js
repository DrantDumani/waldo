import { addEntryToLeaderboard, getSwearWords } from "./firebaseConfig";
import InputName from "./InputName";

function InputNameContainer({ time, plyrName, confirmNameChange }) {
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
    console.log(entry);
    addEntryToLeaderboard(entry);
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
