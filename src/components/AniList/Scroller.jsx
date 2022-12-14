import { useEffect, useState } from "react";

const hello = () => {
  console.log("hello");
};

const Scroller = ({ name, category, status }) => {
  const [data, setData] = useState([]);
  const getAnimeList = async (category) => {
    var query = `
      query{
        Page(perPage:5){
        media(type:ANIME,sort:${category},status:${status})
        {
          title {
            romaji
          }
          status
          coverImage {
            extraLarge
            large
            medium
            color
          }
          type
          format
          id
        }
      }
      }
      `;

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      };

    const res = await fetch(url, options);
    const data = await res.json();
    setData(data.data.Page.media);
  };

  useEffect(() => {
    getAnimeList(category);
  }, []);

  return (
    <div className="w-fit mx-4 mb-8">
      <div className="w-full text-[#a5b4c7] font-bold  flex items-center justify-between pr-8">
        <span>{name}</span>
        <span className="text-xs hover:text-white hover:cursor-pointer">
          View All
        </span>
      </div>
      <div className="flex w-full">
        {data.map((obj, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-center mr-8 my-4 hover:cursor-pointer w-1/5`}
            onClick={() => {
              window.location = "https://anilist.co/anime/" + obj.id;
            }}
          >
            <img
              className="rounded-lg min-h-5/6 w-full"
              src={obj.coverImage.large}
            />
            <span
              style={{
                "&:hover": {
                  background: "#efefef",
                },
              }}
              className={`mt-4 text-sm line-clamp-2 text-[${obj.coverImage.color}]`}
            >
              {obj.title.romaji}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
