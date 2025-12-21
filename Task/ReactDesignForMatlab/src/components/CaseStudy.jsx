import React from "react";
import Card from "./BasicComponents/Card";
import { CASE_STUDIES } from "../constant/CaseStudy";

function CaseStudy() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          <span className="ml-4">קצת תוכן</span>
          <span className="textColor">
            שבטוח יעניין אתכם
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {CASE_STUDIES.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
