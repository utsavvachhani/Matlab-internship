// src/constants/motionData.js
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
} from "../assets";

export const testimonials = [
  {
    id: 1,
    isLeft: true,

    left: {
      mainText: "Grow your business faster",
      secondText: "We help startups scale with modern solutions",
    },

    onHoverLeft: {
      mainText: "Scale with confidence",
      secondText: "Smart tools that grow with your business",
    },

    right: {
      avatar: Logo1,
      username: "John Doe",
      userRole: "Startup Founder",
      feedback:
        "This platform completely transformed the way we handle our workflow. Highly recommended!",
    },

    onHoverRight: {
      avatar: Logo4,
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
      mainText: "Designed for performance",
      secondText: "Optimized tools for real-world results",
    },

    onHoverLeft: {
      mainText: "Built for speed",
      secondText: "High performance without compromise",
    },

    right: {
      avatar: Logo2,
      username: "Sarah Williams",
      userRole: "Product Manager",
      feedback:
        "The UI is clean, the animations are smooth, and the performance is outstanding.",
    },

    onHoverRight: {
      avatar: Logo5,
      username: "Sarah Williams",
      userRole: "Product Manager",
      feedback:
        "Our users immediately noticed the difference after switching.",
    },
  },

  {
    id: 3,
    isLeft: true,

    left: {
      mainText: "Trusted by professionals",
      secondText: "Used by teams across the globe",
    },

    onHoverLeft: {
      mainText: "Loved by experts",
      secondText: "Preferred by industry leaders worldwide",
    },

    right: {
      avatar: Logo3,
      username: "Michael Lee",
      userRole: "UX Designer",
      feedback:
        "I love how intuitive everything feels. It makes my daily work much easier.",
    },

    onHoverRight: {
      avatar: Logo6,
      username: "Michael Lee",
      userRole: "UX Designer",
      feedback:
        "The attention to detail and UX polish is top-tier.",
    },
  },
];
