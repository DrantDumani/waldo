function Objectives({ thumbnails, handleClick }) {
  return (
    <div>
      {thumbnails.map((pic) => (
        <div key={pic.id}>
          <img src={pic.src} alt={pic.id} />
          <p>{pic.id}</p>
        </div>
      ))}
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Objectives;
