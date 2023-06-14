import ImgList from "./ImgList";
import LeaderboardContainer from "./LeaderboardContainer";

function PageWrapper({ gameImages, handleClick, gameName }) {
  return (
    <main>
      <ImgList gameImages={gameImages} handleBtnClick={handleClick} />
      <LeaderboardContainer gameName={gameName} />
    </main>
  );
}

export default PageWrapper;
