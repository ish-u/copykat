import tvImage from "../../assets/Netflix/tv.png";

const EnjoySection = () => {
  return (
    <div className="h-4/6 w-full bg-black border-t-8 border-[#222222] flex px-44">
      <div className="w-3/6 flex flex-col justify-center items-start">
        <span className="text-5xl mb-6 font-bold">Enjoy on your TV.</span>
        <span className="text-2xl ">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </span>
      </div>
      <div className="w-3/6 flex flex-col justify-center items-center relative bg-black">
        <img className="z-30" src={tvImage}></img>
        <img
          className="absolute z-20"
          src="https://c.tenor.com/NerN41mjgV0AAAAC/netflix-intro.gif"
          alt="netlfix start animation"
        />
      </div>
    </div>
  );
};

export default EnjoySection;
