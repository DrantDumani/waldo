import { useContext } from "react";
import { NameContext } from "./NameContext";

function InputName({ time, handleSubmit }) {
  const { name, onNameChange } = useContext(NameContext);
  return (
    <form>
      <input onChange={onNameChange} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(time, name);
        }}
      >
        Submit Score!
      </button>
    </form>
  );
}

export default InputName;
