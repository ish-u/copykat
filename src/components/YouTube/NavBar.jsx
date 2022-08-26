import imageURL from "../../assets/YouTubeLogo.png";
import Tags from "./Tags";

const NavBar = () => {
  return (
    <div className="fixed flex-col w-screen h-30 flex bg-[#202020] z-[100] mr-6">
      <div className="w-screen flex h-14">
        <div className="flex justify-start items-center w-1/5">
          <button className="w-14 h-10">
            <span className="material-icons flex justify-center">menu</span>
          </button>
          <img className="h-5" src={imageURL} />
        </div>
        <div className="flex grow justify-center items-center align-middle">
          <div className="flex flex-row w-3/5">
            <input
              type="text"
              placeholder="Search"
              className="border-[#313131] border-2 bg-[#121212] h-10 px-1 w-full focus:outline-none"
            ></input>
            <button className="bg-[#313131] w-16 h-10">
              <span className="material-icons-outlined flex justify-center">
                search
              </span>
            </button>
          </div>
          <button className="ml-2 rounded-full bg-[#121212] w-10 h-10">
            <span className="material-icons flex justify-center">
              keyboard_voice
            </span>
          </button>
        </div>
        <div className="flex text-sm justify-end items-center w-1/5 mr-6">
          <button className="flex flex-row py-2 px-2 justify-evenly items-center border-[#3a95e3] border text-[#3a95e3]">
            <span className="material-icons-outlined border-[#3a95e3] border rounded-full text-[20px] mx-1">
              person
            </span>
            <span className="font-bold mx-1">SIGN IN</span>
          </button>
        </div>
      </div>
      <div className="w-screen flex h-16 ml-[16%]">
        <Tags />
      </div>
    </div>
  );
};

export default NavBar;
