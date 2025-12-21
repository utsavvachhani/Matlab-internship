// src/components/HexaSection.jsx
import React from "react";
import HexCard from "./BasicComponents/HexCard";
import { HEXA_CARDS } from "../constant/hexaCards";
import "./index.css";

function HexaSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        {/* RIGHT TEXT */}
        <div className="text-right text-white max-w-md">
          <h2 className="text-4xl font-bold mb-6">
            <span className="textColor">הכלים שלנו</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות, ללא
            טפסים מסובכים.
          </p>
        </div>

        {/* HEX AREA */}
        <div className="hex-container">
          {/* TOP */}
          <div className="hex-row hex-top">
            <HexCard {...HEXA_CARDS[0]} />
            <HexCard {...HEXA_CARDS[1]} />
          </div>

          {/* BOTTOM */}
          <div className="hex-row hex-bottom">
            <HexCard {...HEXA_CARDS[2]} />
            <HexCard {...HEXA_CARDS[3]} />
            <HexCard {...HEXA_CARDS[4]} blurred className="hide-mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HexaSection;
