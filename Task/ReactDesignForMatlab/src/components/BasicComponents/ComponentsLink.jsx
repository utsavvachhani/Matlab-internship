import React, { useState } from "react";

function ComponentsLink({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="hidden md:flex md:items-center md:space-x-6 relative">

      {data.map((item, index) => {
        const hasChildren = typeof item === "object";

        return (
          <li
            key={index}
            className="cursor-pointer transition-all hover:scale-105 relative"
            onMouseEnter={() => hasChildren && setOpenIndex(index)}
            onMouseLeave={() => hasChildren && setOpenIndex(null)}
            style={{ color: "var(--dark-text)" }}
          >
            {hasChildren ? item.label : item}

            {/* Dropdown */}
            {hasChildren && openIndex === index && (
              <ul className="absolute right-0 mt-2 bg-white shadow-lg p-3 rounded-lg space-y-2 z-50">
                {item.children.map((child, idx) => (
                  <li
                    key={idx}
                    className="hover:text-pink-500 cursor-pointer px-3 py-1"
                  >
                    {child}
                  </li>
                ))}
              </ul> 
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ComponentsLink;
