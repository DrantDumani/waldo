function ValidationText({ boolean, name }) {
  return (
    <div>
      {boolean ? (
        <p>{`You found ${name}!`}</p>
      ) : (
        <p>Incorrect! Keep searching.</p>
      )}
    </div>
  );
}

export default ValidationText;
