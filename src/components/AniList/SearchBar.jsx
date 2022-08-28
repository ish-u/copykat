import React, { useState } from "react";

const SearchCategories = [
  {
    category: "Genres",
    options: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Ecchi",
      "Fantasy",
      "Hentai",
      "Horror",
      "Mahou Shoujo",
      "Mecha",
      "Music",
      "Mystery",
      "Psychological",
      "Romance",
      "Sci-Fi",
      "Slice of Life",
      "Sports",
      "Supernatural",
      "Thriller",
    ],
  },
  {
    category: "Year",
    options: [],
  },
  {
    category: "Season",
    options: ["Winter", "Summer", "Spring", "Fall"],
  },
  {
    category: "Format",
    options: ["TV Show", "Movie", "TV Short", "Special", "OVA", "ONA", "Music"],
  },
];

const SearchSelect = ({ name, options }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col text-sm p-2 text-[#4b5b6a] relative w-full">
      <span className="text-[#9caec0] m-1">{name}</span>
      <div className="flex items-center bg-[#151f2e] text-[#4b5b6a] p-2 m-1 rounded-lg">
        <input
          type="text"
          name="query"
          placeholder="Any"
          className="bg-[#151f2e] focus:outline-none focus:border-none text-[12px]  placeholder:text-[#4b5b6a] w-5/6"
          onFocus={() => {
            setShow(true);
          }}
          onBlur={() => {
            setShow(false);
          }}
        ></input>
        <span className="material-icons text-md mx-1 w-1/6">
          keyboard_arrow_down
        </span>
      </div>
      {show && (
        <div className="flex flex-col bg-[#151f2e] p-2 m-2 rounded-lg overflow-y-auto absolute top-20 max-h-72 w-5/6">
          {options.map((option, idx) => (
            <div
              className="text-[14px] p-1 ease-in hover:bg-[#0a1625] hover:text-blue-500 rounded-md"
              key={idx}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="lg:px-52 flex pt-16 h-max">
      <div className="flex">
        <div className="w-1/5">
          <div className="flex flex-col text-sm p-2">
            <span className="text-[#9caec0] m-1">Search</span>
            <div className="flex items-center bg-[#151f2e] text-[#4b5b6a] p-2 m-1 rounded-lg">
              <span className="material-icons text-md mx-1 w-1/6">search</span>
              <input
                type="text"
                name="query"
                placeholder="Any"
                className="bg-[#151f2e] focus:outline-none focus:border-none text-[12px]  placeholder:text-[#4b5b6a] w-5/6"
                onFocus={() => {
                  setShow(true);
                }}
                onBlur={() => {
                  setShow(false);
                }}
              ></input>
            </div>
          </div>
        </div>
        {SearchCategories.map((category, idx) => (
          <div className="w-1/5">
            <SearchSelect
              // key={idx.toString()}
              name={category.category}
              options={category.options}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end items-end p-9 m-1">
        <span className="material-icons text-2xl p-1 bg-[#151f2e] text-[#4b5b6a] rounded-lg hover:text-blue-500 ease-in duration-300">
          menu
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
