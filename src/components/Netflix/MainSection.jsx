import frontImage from "../../assets/Netflix/Netflix_Front.jpg";
import NavBar from "./NavBar";

const MainSection = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,100),rgba(0,0,0, 0), rgba(0,0,0,100)) , url(${frontImage})`,
      }}
      className="h-screen relative"
    >
      <NavBar />
      <div className="flex flex-col justify-center align-middle m-auto w-full h-5/6 text-center bg-black/25">
        <span className="text-6xl font-bold  leading-tight w-3/6 mx-auto drop-shadow-lg">
          Unlimited movies, TV shows and more.
        </span>
        <span className="text-2xl mb-6 mt-4 drop-shadow-md">
          Watch anywhere. Cancel anytime.
        </span>
        <span className="drop-shadow-md text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="w-full h-16 mt-4 flex justify-center align-middle">
          <input
            className="w-2/6 p-4 h-full rounded-sm border-0 focus:outline-none text-black"
            placeholder="Email Address"
          ></input>
          <button className="w-1/6 bg-[#e50914] h-full rounded-sm border-red text-3xl flex justify-center items-center">
            Get Started
            <span className="material-icons text-4xl">navigate_next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
