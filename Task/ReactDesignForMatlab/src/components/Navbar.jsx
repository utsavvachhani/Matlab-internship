import React, { useState } from "react";
import { Logo } from "../assets/index";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ComponentsLink from "./BasicComponents/ComponentsLink";
import MobileMenu from "./BasicComponents/MobileMenu";
import { NAV_ITEMS } from "../constant/Navbar";

function Navbar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="space-x-1" style={{ backgroundColor: "var(--nav-bg)" }}>
      <div className="w-full flex items-center justify-between px-10 py-5 shadow-md fixed top-0 z-50">

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          {MobileMenuOpen ? (
            <MenuOpenIcon
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <MenuIcon
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-32 h-auto" />
        </div>

        {/* Desktop Links */}
        <ComponentsLink data={NAV_ITEMS} />

        {/* Button */}
        <button
          className="button w-36 h-10 flex items-center justify-center mx-4"
          onClick={() => alert("Get Started Clicked!")}
        >
          התחילו עכשיו
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <MobileMenu
        open={MobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        data={NAV_ITEMS}
      />
    </nav>
  );
}

export default Navbar;
