import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";

function Footer() {
  return (
    <div className="w-full h-10 border-t border-black/40 fixed bottom-0 bg-white flex items-center justify-between px-10 text-black font-bold">
      <section className="text-black font-normal">
        <span>© 2024 Airbnb, Inc · Privacy · Terms · Sitemap</span>
      </section>
      <section className="h-full flex items-center gap-5">
        <div className="flex items-center gap-2">
          <IconWorld />
          <span>English(Ca)</span>
        </div>
        <span>$ CAD</span>
        <div className="flex items-center gap-1">
          <span>Support & resources</span>
          <IconChevronDown />
        </div>
      </section>
    </div>
  );
}

export default Footer;
