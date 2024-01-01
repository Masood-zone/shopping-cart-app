const StatDetails = ({ heading, paragraph }) => {
  return (
    <div className="stat-box">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div>
      <StatDetails heading="10k+" paragraph="companies" />
      <StatDetails heading="314" paragraph="companies" />
      <StatDetails heading="10k+" paragraph="companies" />
    </div>
  );
};

export default StatsSection;
