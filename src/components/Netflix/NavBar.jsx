import logoImage from "../../assets/Netflix/Netflix_Logo.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 pt-3">
      <img className="w-44" src={logoImage}></img>
      <div className="text-white flex">
        <div className="border-white/50 border flex items-center  mr-8 text-sm">
          <span className="material-icons">language</span>
          <select
            className="bg-black focus:outline-none"
            name="Languages"
            id="language"
          >
            <option value="english" selected>
              English
            </option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <button className="bg-[#e50914] px-2 py-1 rounded-sm">Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
