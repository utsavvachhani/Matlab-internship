import ArrowOrbitMotion from "./BasicComponents/ArrowOrbitMotion";
import arrayImage from "../assets/Logos/arrowImage.png";

export default function ArrowShown() {
  return (
    <section className="w-full text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-right">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 text-pink-400 px-4 py-2 rounded-full text-sm mb-6">
            ✨ פלטפורמת AI לתהליכים בירוקרטיים
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            פחות בירוקרטיה,
            <br />
            <span className="textColor">
              יותר כסף בכיס שלך.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך — פשוט, חכם
            ובמינימום מאמץ.
          </p>

          {/* CTA */}
          <button className="bg-pink-500 hover:bg-pink-600 transition px-10 py-4 rounded-xl text-white font-medium text-lg">
            התחילו עכשיו
          </button>
        </div>

        {/* RIGHT MOTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* <ArrowOrbitMotion /> */}
          <img src={arrayImage} alt="" />
        </div>
      </div>
    </section>
  );
}
