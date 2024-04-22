import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { IconWorld } from "@tabler/icons-react";
import DropdownHeader from "./dropdown";
import { IconSearch } from "@tabler/icons-react";

export default function Header() {
  const [forcused, setFocused] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = (type) => {
    setFocused(type);
  };
  const handleOpen = (open) => {
    setIsOpen(open);
  };
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <section className="w-full flex justify-between items-center p-5 xl:px-14 lg:px-10 px-6">
        <section className="">
          <img src={logo} alt="logo" />
        </section>
        <section className=" text-black xl:text-base text-sm flex justify-center gap-5 items-center">
          <button>Stays</button>
          <button>Experiences</button>
          <button>Online Experiences</button>
        </section>
        <section className=" flex justify-end xl:gap-5 lg:gap-4 md:gap-3 gap-2">
          <button className="text-black xl:text-base text-sm">Airbnb your home</button>
          <button>
            <IconWorld stroke={2} />
          </button>
          <div>
            <DropdownHeader />
          </div>
        </section>
      </section>
      <section className="w-full flex justify-center items-center">
        <div
          className={`2xl:w-[1000px] xl:w-[70%] lg:w-[80%] w-[90%] h-[70px] rounded-full shadow-md flex border-black ${
            forcused ? "bg-gray-200" : "bg-white"
          }`}
        >
          <div
            className={`rounded-full w-[25%] h-full flex justify-center items-start flex-col p-1 hover:bg-gray-300 ${
              forcused === "Where"
                ? "bg-white shadow-lg hover:bg-white"
                : "bg-transparent"
            }`}
          >
            <label for="first_name" className="text-sm pl-8">
              Where
            </label>
            <input
              onFocus={() => handleFocus("Where")}
              onBlur={() => handleFocus("")}
              type="text"
              id="first_name"
              name="first_name"
              className="w-full rounded-full  border-black pl-8 bg-transparent outline-none placeholder:text-black/70"
              placeholder="Search destinations"
            />
          </div>
          <div
            className={`rounded-full w-[25%] h-full flex justify-center items-start flex-col p-1 hover:bg-gray-300 ${
              forcused === "Check in"
                ? "bg-white shadow-lg hover:bg-white"
                : "bg-transparent"
            }`}
          >
            <label for="first_name" className="text-sm pl-8">
              Check in
            </label>
            <input
              onFocus={() => handleFocus("Check in")}
              onBlur={() => handleFocus("")}
              type="text"
              id="first_name"
              name="first_name"
              className="w-full rounded-full  border-black pl-8 bg-transparent outline-none placeholder:text-black/70"
              placeholder="Add dates"
            />
          </div>
          <div
            className={`rounded-full w-[25%] h-full flex justify-center items-start flex-col p-1 hover:bg-gray-300 ${
              forcused === "Check out"
                ? "bg-white shadow-lg  hover:bg-white"
                : "bg-transparent"
            }`}
          >
            <label for="first_name" className="text-sm pl-8">
              Check out
            </label>
            <input
              onFocus={() => handleFocus("Check out")}
              onBlur={() => handleFocus("")}
              type="text"
              id="first_name"
              name="first_name"
              className="w-full rounded-full  border-black pl-8 bg-transparent outline-none placeholder:text-black/70"
              placeholder="Add dates"
            />
          </div>
          <div
            onClick={() => handleOpen(!isOpen)}
            className={`rounded-full w-[25%] h-full flex justify-center items-center p-1 hover:bg-gray-300 pr-3 ${
              forcused === "Who"
                ? "bg-white shadow-lg hover:bg-white"
                : "bg-transparent"
            }`}
          >
            <div className="flex flex-col h-full  justify-center rounded-full">
              <label for="first_name" className="text-sm pl-8">
                Who
              </label>
              <input
                onFocus={() => handleFocus("Who")}
                onBlur={() => handleFocus("")}
                type="text"
                id="first_name"
                name="first_name"
                className="w-full rounded-full pl-8 bg-transparent outline-none placeholder:text-black/70"
                placeholder="Add guests"
              />
            </div>
            {!isOpen ? (
              <div className="min-w-12 min-h-12 bg-red-500 rounded-full text-white flex justify-center items-center">
                <IconSearch stroke={2} />
              </div>
            ) : (
              <div className="w-32 h-12 p-2 bg-red-500 text-white rounded-full cursor-pointer flex justify-center items-center">
                <IconSearch stroke={2} />
                <span>Search</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
