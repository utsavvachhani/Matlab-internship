// function HexCard({ tag, title, desc = [], blurred = false }) {
//   return (
//     <div className={`hex-card ${blurred ? "hex-blur" : ""}`}>
//       <span className="hex-tag">{tag}</span>

//       <h3 className="hex-title">{title}</h3>

//       {/* main description */}
//       <p className="hex-sub">
//         בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.
//       </p>

//       {/* bullet list (SAFE) */}
//       {desc.length > 1 && (
//         <ul className="hex-list">
//           {desc.slice(1).map((item, i) => (
//             <li key={i}>• {item}</li>
//           ))}
//         </ul>
//       )}

//       {!blurred && (
//         <button className="hex-btn">
//           התחילו עכשיו <span>←</span>
//         </button>
//       )}
//     </div>
//   );
// }

// export default HexCard;



// const positions = [
//   // TOP ROW
//   { top: 0,   left: 110, z: 3 }, // top-left
//   { top: 0,   left: 310, z: 3 }, // top-right

//   // BOTTOM ROW (NESTED)
//   { top: 210, left: 0,   z: 1 }, // bottom-left (blur)
//   { top: 210, left: 200, z: 2 }, // bottom-center
//   { top: 210, left: 400, z: 2 }, // bottom-right
// ];





// export default function HexCard({ tag, title, desc, blurred, index }) {
//   const pos = positions[index];

//   return (
//     <div
//       className={`hex-wrap ${blurred ? "hex-blur" : ""}`}
//       style={{
//         top: pos.top,
//         left: pos.left,
//         zIndex: pos.z,
//       }}
//     >
//       {/* 👇 THIS is the hex shape */}
//       <div className="hex-card">
//         <span className="hex-tag">{tag}</span>
//         <h4 className="hex-title">{title}</h4>
//         <p className="hex-desc">{desc}</p>
//         <span className="hex-cta">← התחילו עכשיו</span>
//       </div>
//     </div>
//   );
// }

// const HEX_W = 220;
// const HEX_H = 254;

// const positions = [
//   // 🔼 TOP ROW (2)
//   { top: 0, left: HEX_W * 0.5, z: 3 },        // 110
//   { top: 0, left: HEX_W * 1.4, z: 3 },        // 330

//   // 🔽 BOTTOM ROW (3)
//   { top: HEX_H * 0.80, left: 0, z: 1 },       // blur
//   { top: HEX_H * 0.80, left: HEX_W * 0.95, z: 2 },
//   { top: HEX_H * 0.80, left: HEX_W * 1.85, z: 2 },
// ];
// export default function HexCard({
//   tag,
//   title,
//   desc,
//   blurred = false,
//   index = 0,
// }) {
//   const pos = positions[index];

//   // safety guard
//   if (!pos) return null;

//   return (
//     <div
//       className={`hex-wrap ${blurred ? "hex-blur" : ""}`}
//       style={{
//         top: `${pos.top}px`,
//         left: `${pos.left}px`,
//         zIndex: pos.z,
//       }}
//     >
//       <div className="hex-card">
//         <span className="hex-tag">{tag}</span>

//         <h4 className="hex-title">{title}</h4>

//         <p className="hex-desc">{desc}</p>

//         <span className="hex-cta">← התחילו עכשיו</span>
//       </div>
//     </div>
//   );
// }


// src/components/BasicComponents/HexCard.jsx
import React from "react";

const HEX_W = 220;
const HEX_H = 254;

const positions = [
  { top: 0, left: HEX_W * 0.6, z: 3 },
  { top: 0, left: HEX_W * 1.6, z: 3 },

  { top: HEX_H * 0.8, left: 0, z: 1 },
  { top: HEX_H * 0.8, left: HEX_W * 1.0, z: 2 },
  { top: HEX_H * 0.8, left: HEX_W * 2.0, z: 2 },
];

export default function HexCard({
  tag,
  title,
  desc,
  index = 0,
  blurred = false,
  variant = "desktop",
}) {

  // ✅ MOBILE
  if (variant === "mobile") {
    return (
      <div className="hex-wrap">
        <div className="hex-card">
          <span className="hex-tag">{tag}</span>
          <h4 className="hex-title">{title}</h4>
          <p className="hex-desc">{desc}</p>
          <span className="hex-cta">← התחילו עכשיו</span>
        </div>
      </div>
    );
  }

  // ✅ DESKTOP
  const pos = positions[index];
  if (!pos) return null;

  return (
    <div
      className={`hex-wrap ${blurred ? "hex-blur" : ""}`}
      style={{
        top: pos.top,
        left: pos.left,
        zIndex: pos.z,
        position: "absolute",
      }}
    >
      <div className="hex-card">
        <span className="hex-tag">{tag}</span>
        <h4 className="hex-title">{title}</h4>
        <p className="hex-desc">{desc}</p>
        <span className="hex-cta">← התחילו עכשיו</span>
      </div>
    </div>
  );
}
