import React from "react";
import LogoLoop from "./BasicComponents/LogoLoop";
import { LOGOS } from "../constant/infinitiLogo";

function InfinitiLogo() {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="relative h-20">
        <LogoLoop
          logos={LOGOS}
          speed={50}
          direction="left"
          logoHeight={40}
          gap={20}
          hoverSpeed={10}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Trusted partners logos"
        />
      </div>
    </section>
  );
}

export default InfinitiLogo;
