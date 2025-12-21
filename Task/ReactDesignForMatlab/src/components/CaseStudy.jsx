import React, { useRef } from "react";
import Card from "./BasicComponents/Card";
import { CASE_STUDIES } from "../constant/CaseStudy";

function CaseStudy() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Mouse drag handlers
  const onMouseDown = (e) => {
    if (!scrollRef.current) return;
    // eslint-disable-next-line react-hooks/immutability
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => (isDown = false);
  const onMouseUp = () => (isDown = false);

  const onMouseMove = (e) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          <span className="ml-4">קצת תוכן</span>
          <span className="textColor">שבטוח יעניין אתכם</span>
        </h2>

        {/* Cards Wrapper */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="
            flex md:grid
            flex-nowrap md:grid-cols-3
            gap-6 md:gap-10
            overflow-x-auto md:overflow-visible
            scroll-smooth
            cursor-grab active:cursor-grabbing
            select-none
            px-2
            scrollbar-hide
          "
        >
          {CASE_STUDIES.map((item, index) => (
            <div
              key={index}
              className="
                min-w-70 sm:min-w-[320px]
                md:min-w-0
                shrink-0
                flex justify-center
              "
            >
              <Card {...item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudy;
