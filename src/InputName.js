function InputName({ time, handleSubmit, name, confirmNameChange }) {
  return (
    <form>
      <input onChange={confirmNameChange} maxLength={12} />
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
