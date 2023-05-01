import { useContext } from "react";
import { DataContext } from "./DataContext";
import { NameContext } from "./NameContext";

function InputName({ time }) {
  const { name, onNameChange } = useContext(NameContext);
  const { onSubmitScore } = useContext(DataContext);
  return (
    <form>
      <input onChange={onNameChange} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmitScore(time, name);
        }}
      >
        Submit Score!
      </button>
    </form>
  );
}

export default InputName;
