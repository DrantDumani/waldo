function InputName({ handleChange, time, name, handleSubmit }) {
  return (
    <form>
      <input onChange={handleChange} />
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
