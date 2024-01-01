import RealImages from "./Utils";
import iconEth from "./Images/icon-ethereum.svg";
import iconTime from "./Images/icon-clock.svg";

function CoinDetails({ name, time }) {
  return (
    <div className="coin-detail">
      <div className="coin">
        <RealImages imagesrc={iconEth} imagename="Coin icon" />
        <p>{name}</p>
      </div>
      <div className="coin-time">
        <span>
          <RealImages imagesrc={iconTime} imagename="Clock icon" />
        </span>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default CoinDetails;
