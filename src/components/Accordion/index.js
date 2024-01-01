import React from "react";
import starIcon from "../../assets/svgs/icon-star.svg";
import { ACCORDION_DATA } from "./accordion-data";

function AccordionCard() {
  return (
    <div className="w-[450px] h-[450px] bg-base-100 mx-auto mt-10 absolute top-20 left-0 right-0 rounded-lg shadow-lg p-5 overflow-y-scroll">
      <header className="flex items-center justify-start gap-2">
        <span>
          <img src={starIcon} className="w-9 h-9" alt="Star icon" />
        </span>
        <h1 className="font-extrabold text-5xl">FAQs</h1>
      </header>
      <section className="">
        {ACCORDION_DATA.map((data) => (
          <>
            <div className="collapse collapse-plus bg-base-200 my-2 shadow-md">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title">
                <span className="text-sm font-bold">{data.title}</span>
              </div>
              <div className="collapse-content">
                <p>{data.description}</p>
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
}

export default AccordionCard;
