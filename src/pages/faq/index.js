import React from "react";
import desktopBg from "../../assets/svgs/background-pattern-desktop.svg";
import AccordionCard from "../../components/Accordion";

function FaqLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${desktopBg})`,
      }}
      className="w-full relative h-80 bg-gray-purple"
    >
      <div>
        <AccordionCard />
      </div>
    </div>
  );
}

export default FaqLayout;
