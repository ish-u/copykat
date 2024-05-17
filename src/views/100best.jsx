const NavBar = () => {
  return (
    <div className="w-full h-[100px] sticky top-0">
      <div className="flex justify-between px-[20px] pt-[26px] pb-[11px] bg-global_bg_color sticky top-0">
        <div className="text-article_text text-[15px] mt-[8px]">
          @Music 100 Best Albums
        </div>
        <div className="text-sign_in_text text-[17px] font-[500] pt-[6px]">
          Sign in
        </div>
      </div>
      <div className="flex px-[20px] pb-[4px] bg-global_bg_color z-20 sticky">
        <span className="h-[20px] w-[20px] text-white mr-[25px] material-icons">
          filter_list
        </span>
        <span className="h-[20px] w-[20px] text-white material-icons">
          format_list_bulleted
        </span>
      </div>
      <div className="h-[40px] bg-global_bg_color blur-[8px] block w-full absolute -bottom-4 z-10"></div>
    </div>
  );
};

const HundredBest = () => {
  return (
    <div className="text-white bg-global_bg_color h-screen">
      <NavBar />
      asdf
    </div>
  );
};

export default HundredBest;
