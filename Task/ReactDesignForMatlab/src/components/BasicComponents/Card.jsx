import React from "react";

function Card({ image, tag, readTime, title, description }) {
  return (
    <div
      dir="rtl"
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 max-w-sm"
    >
      {/* Image */}
      <img src={image} alt="card" className="w-full h-60 object-cover" />

      {/* Content */}
      <div className="p-6 text-right">
        {/* Meta */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
          <span
            className={`px-4 py-1 rounded-full text-sm ${
              tag === "ביטוח"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {tag}
          </span>
          <span>זמן קריאה: {readTime} דקות</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0B0B3B] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
