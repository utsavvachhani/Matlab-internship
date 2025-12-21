import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FQA_DATA } from "../constant/fqaData";

function FQA() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#FDF9FC] overflow-hidden py-20">
      {/* Top Right Circles */}
      <div className="faq-circles circle-top-right">
        <div className="circle-mask"></div>
      </div>

      {/* Bottom Left Circles */}
      <div className="faq-circles circle-bottom-left">
        <div className="circle-mask"></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="textColor">שאלות</span> <span>שאולי יש לכם</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4" dir="rtl">
          {FQA_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                {/* Question */}
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-right"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900">
                    {item.question}
                  </span>

                  <span className="text-pink-500">
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 px-5 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FQA;
