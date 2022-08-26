const TagsCategory = [
  "All",
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "News",
  "Live",
  "Fashion & Beauty",
  "Learning",
  "Spotlight",
  "360° Video",
  "Music",
  "Sports",
  "Gaming",
  "Movies",
  "News",
  "Live",
  "Fashion & Beauty",
  "Learning",
];

const TagButton = ({ title, active }) => {
  return (
    <div
      className={`mx-2 border border-[#454545] rounded-full px-4 py-1 
                  text-center text-sm bg-[#373737] w-max hover:cursor-pointer
                  ${active ? "bg-white text-black" : "hover:bg-[#494949]"}`}
    >
      {title}
    </div>
  );
};

const Tags = () => {
  return (
    <div className="overflow-hidden mx-2">
      <div className="border-y border-[#313131] h-16 flex items-center w-max">
        <span className="absolute right-4 z-10 material-icons">
          navigate_next
        </span>
        <span className="absolute right-0  bg-[#212121] blur-sm h-14 w-20"></span>
        {TagsCategory.map((tag, idx) => (
          <TagButton active={idx === 0} title={tag} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
