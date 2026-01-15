import { testimonials } from "../constant/motionData";

const MotionSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-20">
      {testimonials.map((item) => (
        <FlipRow key={item.id} item={item} />
      ))}
    </section>
  );
};

const FlipRow = ({ item }) => {
  const {
    isLeft,
    left,
    right,
    onHoverLeft,
    onHoverRight,
  } = item;

  // VISUAL LOGIC (POSITION + WIDTH)
  const pinkOrder = isLeft ? "md:order-1" : "md:order-2";
  const whiteOrder = isLeft ? "md:order-2" : "md:order-1";

  const pinkSpan = "md:col-span-1";
  const whiteSpan = "md:col-span-2";

  return (
    <div className="perspective">
      <div
      
        className="relative w-full min-h-62.5
        transition-transform duration-700
        transform-style-preserve-3d
        hover:rotate-y-180"
      >
        {/* ================= FRONT ================= */}
        <div className="absolute inset-0 backface-hidden grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          
          {/* PINK BLOCK */}
          <div
            className={`flex items-center rounded-2xl p-6 shadow-lg
            bg-pink-500 text-white
            ${pinkSpan} ${pinkOrder}`}
          >
            <div>
              <h2 className="text-2xl font-bold">
                {left.mainText}
              </h2>
              <p className="mt-3 text-pink-100">
                {left.secondText}
              </p>
            </div>
          </div>

          {/* WHITE BLOCK */}
          <div
            className={`rounded-2xl p-6 shadow-lg bg-[#FDF9FC]

            ${whiteSpan} ${whiteOrder}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={right.avatar}
                alt={right.username}
                className="w-12 h-12 rounded-full border-2 border-pink-500"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {right.username}
                </h4>
                <p className="text-sm text-gray-500">
                  {right.userRole}
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-gray-700">
              “{right.feedback}”
            </p>
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          
          {/* PINK BLOCK (HOVER) */}
          <div
            className={`flex items-center rounded-2xl p-6 shadow-lg
            bg-pink-500 text-white
            ${pinkSpan} ${pinkOrder}`}
          >
            <div>
              <h2 className="text-2xl font-bold">
                {onHoverLeft.mainText}
              </h2>
              <p className="mt-3 text-pink-100">
                {onHoverLeft.secondText}
              </p>
            </div>
          </div>

          {/* WHITE BLOCK (HOVER) */}
          <div
            className={`rounded-2xl p-6 shadow-lg bg-[#FDF9FC]

            ${whiteSpan} ${whiteOrder}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={onHoverRight.avatar}
                alt={onHoverRight.username}
                className="w-12 h-12 rounded-full border-2 border-pink-500"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {onHoverRight.username}
                </h4>
                <p className="text-sm text-gray-500">
                  {onHoverRight.userRole}
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-gray-700">
              “{onHoverRight.feedback}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionSection;
