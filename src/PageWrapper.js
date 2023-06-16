import ImgList from "./ImgList";
import LeaderboardContainer from "./LeaderboardContainer";

function PageWrapper({ gameImages, handleClick, gameName }) {
  return (
    <main>
      <div className="padded-container">
        <ImgList gameImages={gameImages} handleBtnClick={handleClick} />
        <LeaderboardContainer gameName={gameName} />
      </div>
    </main>
  );
}

export default PageWrapper;
