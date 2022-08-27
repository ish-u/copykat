import children from "../../assets/Netflix/children.png";

const ChildrenSection = () => {
  return (
    <div className="h-4/6 w-full bg-black border-t-8 border-[#222222] flex">
      <div className="w-3/6 flex justify-end bg-black relative">
        <img className="p-12" src={children}></img>
      </div>
      <div className="w-3/6 flex flex-col justify-center items-start pr-44">
        <span className="text-5xl mb-6 font-bold">
          Create profiles for children.
        </span>
        <span className="text-2xl ">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </span>
      </div>
    </div>
  );
};

export default ChildrenSection;
