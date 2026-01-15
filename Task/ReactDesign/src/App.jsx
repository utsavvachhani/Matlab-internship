import ArrowShown from "./components/ArrowShown";
import CaseStudy from "./components/CaseStudy";
import ContactUs from "./components/ContactUs";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import FQA from "./components/FQA";
import HexaSection from "./components/HexaSection";
import InfinitiLogo from "./components/InfinitiLogo";
import MotionSection from "./components/MotionSection";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";

function App() {

  return (
    <>
      <Navbar />
      <ArrowShown />
      <InfinitiLogo />
      <ProfileSection />
      <FeatureSection />
      <HexaSection />
      <MotionSection />
      <FQA />
      <CaseStudy />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
