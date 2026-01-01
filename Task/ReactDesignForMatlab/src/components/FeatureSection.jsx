import React from "react";
import { FEATURE_DATA } from "../constant/featureData";

function FeatureSection() {
  return (
    <section className="w-full py-20 px-4">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        <span>כל הסיבות </span>
        <span className="textColor"> לבחור בנו</span>{" "}
      </h2>

      {/* Cards */}
      <div
        dir="rtl"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {FEATURE_DATA.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className=" group bg-white p-8 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(236,72,153,0.35)] "
            >
              {/* Icon */}
              <div
                className="
    mx-auto mb-6
    w-16 h-16
    flex items-center justify-center
    rounded-xl
    bg-pink-500
    transition-transform duration-300
    group-hover:rotate-12
  "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureSection;
