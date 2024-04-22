import React from "react";
import { homeData } from "../../../types/home";
import { IconCircleChevronRight } from "@tabler/icons-react";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Toggle from "../ui/toggle";

const Categories = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <section className="flex w-[80%] relative items-center justify-center ">
        {/* <button className="text-black rotate-180 absolute left-3">
          <IconCircleChevronRight stroke={2} />
        </button> */}
        <div className="w-[95%] h-20 flex overflow-x-auto overflow-y-hidden  border-black scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
          {homeData.map((item, index) => (
            <div
              key={index}
              className="h-20 w-32 min-w-28  border-red-500 flex flex-col justify-center items-center"
            >
              <button className="flex flex-col justify-center items-center">
                <span>{item.icon}</span>
                <span className="font-Circular">{item.title}</span>
              </button>
            </div>
          ))}
        </div>
        {/* <button className="text-black absolute right-3">
          <IconCircleChevronRight stroke={2} />
        </button> */}
      </section>
      <section className="flex justify-center items-center w-[20%] gap-5">
        <button className="w-32 h-14 border border-black/30 flex justify-center items-center gap-3 rounded-xl">
          <IconAdjustmentsHorizontal />
          <span className="h-full flex justify-center items-center">
            filter
          </span>
        </button>
        <div className="w-24 h-14 border border-black/30 flex justify-center items-center rounded-xl">
          <Toggle />
        </div>
      </section>
    </div>
  );
};

export default Categories;
