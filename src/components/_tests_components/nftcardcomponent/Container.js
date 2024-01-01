import RealImages from "./Utils";
import CoinDetails from "./Content";
import Avatar from "./Avatar";
import ethereum from "./Images/image-equilibrium.jpg";
function ImageCard() {
  return (
    <div className="img">
      <RealImages
        imageclass="image"
        imagesrc={ethereum}
        imagename="Etherum Coin"
      />
    </div>
  );
}

function Description({ name, info }) {
  return (
    <div className="description">
      <h2>{name}</h2>
      <p>{info}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="container">
      <div className="nft-card">
        <ImageCard />
        <Description
          name="Equilibrium #3429"
          info="Our Equilibrium collection promotes balance and calm."
        />
        <CoinDetails name="0.041 ETH" time="3 days left" />
        <Avatar creatorName="Jules Wyvern" />
      </div>
    </div>
  );
}
