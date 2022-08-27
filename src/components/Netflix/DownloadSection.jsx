import strangerThingsMobile from "../../assets/Netflix/stranger_things_2.jpg";
import strangerThingsPoster from "../../assets/Netflix/stranger_things.png";

const DownloadSection = () => {
  return (
    <div className="h-4/6 w-full bg-black border-t-8 border-[#222222] flex">
      <div className="w-3/6 flex justify-center bg-black relative">
        <img
          className="p-10"
          style={{ objectFit: "cover" }}
          src={strangerThingsMobile}
        ></img>
        <div className="absolute bottom-16 w-[45%] h-24 border border-[#3e3e3e] rounded-xl p-4 flex align-middle bg-black">
          <img
            className="h-full "
            style={{ objectFit: "contain" }}
            src={strangerThingsPoster}
          ></img>
          <div className="flex flex-col grow p-4 h-full justify-center">
            <span>Stranger Things</span>
            <span className="text-blue-600">Downloading...</span>
          </div>
          <div className="flex m-auto animate-bounce text-blue-500">
            <span className="material-icons text-3xl mr-2">downloading</span>
          </div>
        </div>
      </div>
      <div className="w-3/6 flex flex-col justify-center items-start pr-44">
        <span className="text-5xl mb-6 font-bold">
          Download your shows to watch offline.
        </span>
        <span className="text-2xl ">
          Save your favourites easily and always have something to watch.
        </span>
      </div>
    </div>
  );
};

export default DownloadSection;
