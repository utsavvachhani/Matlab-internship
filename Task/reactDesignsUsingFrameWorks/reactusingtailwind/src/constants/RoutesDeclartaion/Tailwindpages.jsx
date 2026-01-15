import Shop from "../../pages/Shop";
import Tailwind from "../../pages/Tailwind";

const Tailwindpages = {
  path: "/tailwind",
  element: <Tailwind />,
  Children: [
    {
      Name : "Center Squre",
      Description: "Center a square in the middle of the screen",
      path: "center-squre",
      element: <Shop />,
    },
    {
      Name : "Footer",
      Description: "Create a footer with a fixed position",
      path: "footer",
      element: <Shop />,
    },
  ],
};

export default Tailwindpages;