import FactCheckIcon from "@mui/icons-material/FactCheck";
import { ProfilePic } from "../assets";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

function ProfileSection() {
  return (
    <section className="w-full  py-20 px-4">
      <div
        dir="rtl"
        className="
          max-w-7xl mx-auto
          flex flex-col-reverse lg:flex-row
          items-center
          gap-16
        "
      >
        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-right">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span>איך זה עובד?</span>
            <span className="textColor"> פשוט.</span>{" "}
          </h2>

          {/* Steps */}
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute right-6 top-0 h-full w-0.5 bg-white/20" />

            {/* Step 1 */}
            <div className="flex items-start gap-6 relative">
              <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center z-10">
                <EditCalendarOutlinedIcon className="text-black" />
              </div>

              <div>
                <span className="text-pink-500 font-semibold">שלב 1</span>
                <h3 className="text-black font-semibold mb-1">מילוי פרטים</h3>
                <p className="text-black/85 text-sm leading-relaxed">
                  הזינו את פרטי הבקשה ותארו את המקרה בליווי בוט AI חכם שמנחה
                  אתכם בכל שלב.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 relative">
              <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center z-10">
                <NoteAddOutlinedIcon className="text-black" />
              </div>

              <div>
                <span className="text-pink-500 font-semibold">שלב 2</span>
                <h3 className="text-black font-semibold mb-1">צירוף מסמכים</h3>
                <p className="text-black/85 text-sm leading-relaxed">
                  העלו מסמכים ותמונות רלוונטיות בקלות ובאבטחה מלאה.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 relative">
              <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center z-10">
                <FactCheckIcon className="text-black" />
              </div>

              <div>
                <span className="text-pink-500 font-semibold">שלב 3</span>
                <h3 className="text-black font-semibold mb-1">הגשה וסיום</h3>
                <p className="text-black/85 text-sm leading-relaxed">
                  סקירה סופית, תשלום מאובטח והגשה מקוונת של הבקשה.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-12 bg-pink-500 hover:bg-pink-600 transition px-8 py-3 rounded-xl text-white font-medium">
            התחילו עכשיו
          </button>
        </div>

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[320px] h-80 md:w-105 md:h-105">
            {/* OUTER ORBIT */}
            <div className="absolute inset-0 rounded-full border border-[#8B5A2B]/40" />

            {/* INNER ORBIT */}
            <div className="absolute inset-8 rounded-full border border-[#8B5A2B]/25" />

            {/* PROFILE IMAGE */}
            <div className="absolute inset-14 rounded-full overflow-hidden z-10 bg-white">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
