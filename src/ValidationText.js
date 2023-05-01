function ValidationText({ guess, name }) {
  return (
    <div>
      {guess ? (
        <p>{`You found ${name}!`}</p>
      ) : (
        <p>Incorrect! Keep searching.</p>
      )}
    </div>
  );
}

export default ValidationText;
