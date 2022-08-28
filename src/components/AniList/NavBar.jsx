import logo from "../../assets/AniList/AniList_Logo.svg";

const NavBar = () => {
  return (
    <div className="w-full  bg-[#152232] h-16 lg:px-56 px-4 flex items-center">
      <img src={logo} className="h-2/3" alt="logo" />
      <div className="text-[13px] text-[#a0b1c5] grow flex justify-center items-center md:ml-8">
        <span className="p-4 hover:text-white hover:cursor-pointer">
          Search
        </span>
        <span className="p-4 hover:text-white hover:cursor-pointer">
          Social
        </span>
        <span className="p-4 hover:text-white hover:cursor-pointer">Forum</span>
        <span className="p-4 hover:text-white hover:cursor-pointer ml-10">
          Log In
        </span>
        <span className="p-3 hover:scale-105 ease-in duration-300 text-white">
          <button className="py-2 px-2 border-blue-500 bg-blue-500 rounded-lg font-bold hover:shadow-md hover:shadow-blue-500/25">
            Sign Up
          </button>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
