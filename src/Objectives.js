function Objectives({ thumbnails, onStart }) {
  return (
    <div>
      {thumbnails.map((pic) => (
        <div>
          <img src={pic.src} alt={pic.id} key={pic.id} />
          <p>{pic.id}</p>
        </div>
      ))}
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default Objectives;
