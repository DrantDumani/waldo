function Objectives({ thumbnails, handleClick }) {
  return (
    <div>
      {thumbnails.map((pic) => (
        <div>
          <img src={pic.src} alt={pic.id} key={pic.id} />
          <p>{pic.id}</p>
        </div>
      ))}
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Objectives;
