function Objectives({ thumbnails, onStart }) {
  return (
    <div>
      {thumbnails.map((pic) => (
        <img src={pic.src} alt="thumbnail" key={pic.id} />
      ))}
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default Objectives;
