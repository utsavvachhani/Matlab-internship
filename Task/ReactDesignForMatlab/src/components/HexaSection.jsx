// src/components/HexaSection.jsx
import React from "react";
import HexCard from "./BasicComponents/HexCard";
import { HEXA_CARDS } from "../constant/hexaCards";

function HexaSection() {
  return (
    <section className="w-full  py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* RIGHT – TEXT */}
        <div className="text-right text-white">
          <h2 className="text-4xl font-bold mb-6">
            <span className="textColor">הכלים שלנו</span>{" "}
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-md ml-auto">
            הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות, ללא
            טפסים מסובכים.
          </p>
        </div>


        {/* LEFT – HEX GRID */}
        <div className="hex-grid">
          {HEXA_CARDS.map((card) => (
            <HexCard
              key={card.id}
              tag={card.tag}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HexaSection;
