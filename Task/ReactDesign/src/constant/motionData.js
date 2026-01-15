import {
  motion1,
  motion2,
  motion3,
  motion4,
  motion5,
  motion6,
} from "../assets";

export const testimonials = [
  {
    id: 1,
    isLeft: true,

    left: {
      mainText: "1.2 מיליון ₪",
      secondText: "כסף שנכנס ללקוחות בירוקליק",
    },

    onHoverLeft: {
      mainText: "Scale with confidence",
      secondText: "Smart tools that grow with your business",
    },

    right: {
      avatar: motion1,
      username: "הלני זר",
      userRole: "הכינה מכתב לתביעה קטנה",
      feedback:
        "“לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בירוקליק הנחתה אותי שלב אחרי שלב וייצרה בשבילי מכתב שנראה כאילו נכתב על ידי עורך דין. הרגשתי ביטחון שאני מציגה את הסיפור שלי כמו שצריך.”",
    },

    onHoverRight: {
      avatar: motion4,
      username: "John Doe",
      userRole: "Startup Founder",
      feedback:
        "An absolute game-changer for our team’s productivity and collaboration.",
    },
  },

  {
    id: 2,
    isLeft: false,

    left: {
      mainText: "4 דקות",
      secondText: "זמן ממוצע בתהליך",
    },

    onHoverLeft: {
      mainText: "Built for speed",
      secondText: "High performance without compromise",
    },

    right: {
      avatar: motion2,
      username: "דניאל מתיתיהו",
      userRole: "קיבל החזר מחברת ביטוח",
      feedback:
        "״המערכת של בירוקליק חסכה לי שעות של ניסיונות להבין איך לנסח מכתב לביטוח. הכל היה פשוט — כמה שאלות קצרות ובום, יצא מכתב מוכן לשליחה. לא דמיינתי שזה יהיה כל כך קל!״",
    },

    onHoverRight: {
      avatar: motion5,
      username: "Sarah Williams",
      userRole: "Product Manager",
      feedback: "Our users immediately noticed the difference after switching.",
    },
  },

  {
    id: 3,
    isLeft: true,

    left: {
      mainText: "130",
      secondText: "תהליכים שהושלמו בהצלחה",
    },

    onHoverLeft: {
      mainText: "Loved by experts",
      secondText: "Preferred by industry leaders worldwide",
    },

    right: {
      avatar: motion3,
      username: "סהר מזרחי",
      userRole: "הכין מכתב לתביעה",
      feedback:
        "“במקום לשבת שעות מול דף ריק, נכנסתי לבירוקליק ותוך דקות היה לי מכתב מסודר וברור להגשה לבית המשפט. אהבתי במיוחד את השפה — מקצועית אבל מובנת. ממש שירות מציל עצבים.”",
    },

    onHoverRight: {
      avatar: motion6,
      username: "Michael Lee",
      userRole: "UX Designer",
      feedback: "The attention to detail and UX polish is top-tier.",
    },
  },
];
