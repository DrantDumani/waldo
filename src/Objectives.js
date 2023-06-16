function Objectives({ thumbnails, handleClick }) {
  return (
    <div className="center-objectives">
      <div className="objectives-container">
        <div className="objective-img-container">
          {thumbnails.map((pic) => (
            <div key={pic.id} className="objective-img-div">
              <img src={pic.src} alt={pic.id} />
              <p>{pic.id}</p>
            </div>
          ))}
        </div>
        <p>Find all of these characters in the image</p>
        <button onClick={handleClick} className="start-btn">
          Start
        </button>
      </div>
    </div>
  );
}

export default Objectives;
