import SideBar from "./SideBar";
import Tags from "./Tags";
import VideoGrid from "./VideoGrid";

const MainArea = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <SideBar />
      </div>
      <div className="bg-[#181818] grow pt-14 h-full w-5/6">
        <div className="p-2">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
};

export default MainArea;
