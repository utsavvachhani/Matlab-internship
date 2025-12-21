import React, { useState } from "react";

function MobileMenu({ open, onClose, data }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div
      className={`block md:hidden fixed top-0 right-0 h-full w-56 bg-white shadow-xl z-40 p-6 transform 
      ${open ? "translate-x-0" : "translate-x-full"} 
      transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex flex-col gap-6 mt-20 text-lg font-medium">

        {data.map((item, index) => {
          const hasChildren = typeof item === "object";

          return (
            <li key={index}>

              {/* Parent Item */}
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() =>
                  hasChildren
                    ? setExpandedIndex(expandedIndex === index ? null : index)
                    : onClose()
                }
              >
                <span>{hasChildren ? item.label : item}</span>

                {hasChildren && (
                  <span>{expandedIndex === index ? "▲" : "▼"}</span>
                )}
              </div>

              {/* Children - Expandable */}
              {hasChildren && expandedIndex === index && (
                <ul className="pl-4 mt-2 space-y-2 text-base">
                  {item.children.map((child, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer"
                      onClick={onClose}
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
    </div>
  );
}

export default MobileMenu;
