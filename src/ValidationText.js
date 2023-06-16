function ValidationText({ boolean, name }) {
  return (
    <div className="validation-text">
      {boolean ? (
        <p>{`${name} has been found!`}</p>
      ) : (
        <p>Incorrect! Keep searching.</p>
      )}
    </div>
  );
}

export default ValidationText;
