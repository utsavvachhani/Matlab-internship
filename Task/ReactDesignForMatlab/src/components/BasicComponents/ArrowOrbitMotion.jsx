// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ArrowOrbitMotion() {
  return (
    <div className="relative w-95 h-95 max-w-[90vw] max-h-[90vw]">
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/20"
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-white/20"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-white/20"
      />

      {/* Center Arrow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
        <div className="w-0 h-0 border-l-45 border-r-45 border-l-transparent border-r-transparent border-b-80 border-b-pink-500" />
      </div>

      {/* Orbiting Arrows */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 18 + i * 4,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 rotate-90"
            style={{
              top: i % 2 === 0 ? "2%" : "98%",
            }}
          >
            <div
              className="w-0 h-0 border-l-[9px] border-r-[9px] border-l-transparent border-r-transparent border-b-16"
              style={{
                borderBottomColor: i % 2 === 0 ? "#ff4d9d" : "#facc15",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
