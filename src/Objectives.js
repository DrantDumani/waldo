function Objectives({ thumbnails, onStart }) {
  return (
    <div>
      {thumbnails.map((pic) => (
        <div>
          <img src={pic.src} alt={pic.name} key={pic.id} />
          <p>{pic.name}</p>
        </div>
      ))}
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default Objectives;
