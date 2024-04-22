import React, { useState } from "react";
import Categories from "../Components/categories/categories";
// import { UseBookContext } from "../Context/books.context";

function Home() {
  return (
    <div className="w-screen">
      <section className="w-full flex items-center justify-center">
        <Categories />
      </section>
      <section></section>
    </div>
  );
}

export default Home;
