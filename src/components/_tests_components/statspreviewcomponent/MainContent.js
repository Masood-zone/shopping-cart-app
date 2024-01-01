import ImageSection from "./ImageSection";
import TextContent from "./TextContent";

const MainContent = () => {
  return (
    <div className="container">
      <div className="details">
        <div className="details-box">
          <TextContent />
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
