import React, { useState } from "react";
import Categories from "../Components/categories/categories";
import CardDefault from "../Components/cards/card";
import { cardData } from "../../types/cardData";
// import { UseBookContext } from "../Context/books.context";

function Discover() {
  return (
    <div className="w-screen py-10 flex items-center flex-col">
      <section className="w-[95%] flex items-center justify-center">
        <Categories />
      </section>
      <section className="w-[95%] flex justify-center flex-wrap py-5 gap-5">
        {cardData.map((items, index) => (
          <button key={index} className="w-[320px] h-[440px] flex justify-center">
            <CardDefault
              place={items.place}
              stars={items.stars}
              distance={items.distance}
              data={items.data}
              price={items.price}
              duration={items.duration}
            />
          </button>
        ))}
      </section>
    </div>
  );
}

export default Discover;
