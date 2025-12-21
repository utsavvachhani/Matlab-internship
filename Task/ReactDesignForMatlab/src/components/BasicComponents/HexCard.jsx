function HexCard({ tag, title, desc = [], blurred = false }) {
  return (
    <div className={`hex-card ${blurred ? "hex-blur" : ""}`}>
      <span className="hex-tag">{tag}</span>

      <h3 className="hex-title">{title}</h3>

      {/* main description */}
      <p className="hex-sub">
        בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.
      </p>

      {/* bullet list (SAFE) */}
      {desc.length > 1 && (
        <ul className="hex-list">
          {desc.slice(1).map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      )}

      {!blurred && (
        <button className="hex-btn">
          התחילו עכשיו <span>←</span>
        </button>
      )}
    </div>
  );
}

export default HexCard;
