const ExploreCategories = [
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
];

const SideBarButton = ({ title, icon, active }) => {
  return (
    <div
      className={`text-white h-10 flex justify-start align-middle items-center
                    hover:bg-[#383838] ${
                      active ? "bg-[#383838]" : "hover:bg-[#494949]"
                    } `}
    >
      <span className={`material-icons${!active ? "-outlined" : ""} ml-6`}>
        {icon}
      </span>
      <span className="ml-6 text-bold">{title}</span>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 w-2/12 z-[100] mt-16 pb-16 pr-4 hover:pr-2 h-screen bg-[#202020] hover:overflow-y-scroll overflow-hidden">
      <SideBarButton title="Home" icon="home" active={true} />
      <SideBarButton title="Explore" icon="explore" />
      <SideBarButton title="Shorts" icon="ads_click" />
      <SideBarButton title="Subscriptions" icon="subscriptions" />
      <div className="border-t-2 my-3  border-[#313131]"></div>
      <SideBarButton title="Library" icon="video_library" />
      <SideBarButton title="History" icon="history" />
      <div className="border-t-2 my-3  border-[#313131]"></div>
      <div className="mx-6">
        <span>Sign in to like videos, comment, and subscribe.</span>
        <button className="mt-4 flex flex-row w-32 p-1 justify-evenly items-center border-[#3a95e3] border text-[#3a95e3]">
          <span className="material-icons-outlined border-[#3a95e3] border rounded-full text-[20px]">
            person
          </span>
          <span className="font-semibold">SIGN IN</span>
        </button>
      </div>
      <div className="border-t-2 my-3  border-[#313131]"></div>
      <span className="text-[#626b71] mx-6 font-semibold">EXPLORE</span>
      {ExploreCategories.map((category, idx) => (
        <SideBarButton key={category.toString()} title={category} />
      ))}
    </div>
  );
};

export default SideBar;
