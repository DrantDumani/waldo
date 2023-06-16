import UserTime from "./UserTime";

function InputName({ time, handleSubmit, name, confirmNameChange }) {
  return (
    <div className="form-flex-container">
      <form className="score-form">
        <p className="score-info">Your score was {<UserTime time={time} />}</p>
        <input onChange={confirmNameChange} maxLength={12} value={name} />
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
    </div>
  );
}

export default InputName;
