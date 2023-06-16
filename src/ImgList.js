function ImgList({ gameImages, handleBtnClick }) {
  return (
    <div className="leaderboard-img-grid">
      {gameImages.map((img, index) => {
        return (
          <button key={img.id} onClick={() => handleBtnClick(index)}>
            <img src={img.src} alt={img.id} />
          </button>
        );
      })}
    </div>
  );
}

export default ImgList;
