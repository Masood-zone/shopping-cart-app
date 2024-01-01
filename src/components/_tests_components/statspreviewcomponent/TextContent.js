import HeaderText from "./HeaderText";
import StatsSection from "./StatsSection";

const MainText = ({ children }) => {
  return <div>{children}</div>;
};

const TextContent = () => {
  return (
    <div>
      <div className="main-text">
        <HeaderText insights="Insights" />
      </div>
      <div className="information">
        <MainText>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </MainText>
      </div>
      <div className="stats">
        <StatsSection />
      </div>
    </div>
  );
};

export default TextContent;
