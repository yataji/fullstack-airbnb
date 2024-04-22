import React from "react";
import logo from "../../assets/logo.svg";
import { IconWorld } from "@tabler/icons-react";
import DropdownHeader from "./dropdown";

export default function Header() {
  return (
    <div className="w-screen flex justify-center items-center p-5 px-14">
      <section className="w-[33%]">
        <img src={logo} alt="logo" />
      </section>
      <section className="w-[33%] flex justify-center gap-5 items-center">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </section>
      <section className="w-[33%] flex justify-end gap-5">
        <button>Airbnb your home</button>
        <button>
          <IconWorld stroke={2} />
        </button>
        <div>
          <DropdownHeader />
        </div>
      </section>
    </div>
  );
}
