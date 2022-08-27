import tvImage from "../../assets/Netflix/tv_2.png";

const WatchEverySection = () => {
  return (
    <div className="h-4/6 w-full bg-black border-t-8 border-[#222222] flex px-48">
      <div className="w-3/6 flex flex-col justify-center items-start pr-4">
        <span className="text-5xl mb-6 font-bold">Watch everywhere.</span>
        <span className="text-2xl ">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </span>
      </div>
      <div className="w-3/6 flex flex-col justify-center items-center relative bg-black">
        <img className="z-40" src={tvImage}></img>
        <img
          className="absolute z-20 h-[45%] w-3/6 top-16"
          src="https://c.tenor.com/NerN41mjgV0AAAAC/netflix-intro.gif"
          alt="netlfix start animation"
        />
      </div>
    </div>
  );
};

export default WatchEverySection;
