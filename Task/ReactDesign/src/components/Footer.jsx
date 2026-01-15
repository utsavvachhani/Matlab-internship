import React from "react";
import {Logo} from "../assets";
import { FOOTER_LINKS } from "../constant/footerLinks";

function Footer() {
  return (
    <footer className="w-full bg-white rounded-t-3xl px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Logo Section */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <img src={Logo} alt="Logo" className="w-40" />
          <p className="text-sm text-gray-500">
            בירוקליק – בירוקרטיה בקליק
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">ניווט</h3>
          {FOOTER_LINKS.navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:underline transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Privacy */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">פרטיות</h3>
          {FOOTER_LINKS.privacy.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:underline transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">יצירת קשר</h3>
          <a
            href={`mailto:${FOOTER_LINKS.contact.email}`}
            className="hover:underline"
          >
            {FOOTER_LINKS.contact.email}
          </a>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-500">
        בירוקליק © 2025 כל הזכויות שמורות
      </div>
    </footer>
  );
}

export default Footer;
