import { useEffect, useState } from "react";
import Scroller from "./Scroller";

const categories = [
  { category: "TRENDING_DESC", name: "TRENDING NOW", status: "RELEASING" },
  {
    category: "POPULARITY_DESC",
    name: "UPCOMING NEXT SEASON",
    status: "NOT_YET_RELEASED",
  },
  {
    category: "POPULARITY_DESC",
    name: "POPULAR ALL TIME",
    status: "FINISHED",
  },
];

const Grid = () => {
  return (
    <div className="lg:px-52">
      {categories.map((category, idx) => (
        <Scroller
          key={idx}
          category={category.category}
          name={category.name}
          status={category.status}
        />
      ))}
    </div>
  );
};

export default Grid;
