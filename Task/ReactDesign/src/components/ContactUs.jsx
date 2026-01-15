import React from "react";

function ContactUs() {
  return (
    <section
      dir="rtl"
      className="w-full flex justify-center px-4 py-20"
    >
      <div className="relative w-full max-w-6xl bg-[#FBF9FD] rounded-3xl px-6 md:px-16 py-16 overflow-hidden">

        {/* Background Circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute w-150 h-150 border border-gray-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-225 h-225 border border-gray-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B3B] leading-snug">
            נשמח לדבר אתכם, השאירו <br />
            פרטים ונחזור אליכם בהקדם.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[#2F2F5F] max-w-2xl mx-auto">
            אנחנו מייצרים ועוברים את כל הטפסים בעזרת מערכת חכמה וחדשנית
            וחוסכים לכם את כל הכאב ראש והבירוקרטיה
          </p>

          {/* Form */}
          <div className="mt-10 flex flex-col md:flex-row items-center gap-4 justify-center">

            <input
              type="text"
              placeholder="שם"
              className="w-full md:w-72 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="טלפון"
              className="w-full md:w-72 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none"
            />

            <button className="button w-full md:w-40 h-12">
              שליחה
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;
