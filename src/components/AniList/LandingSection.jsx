import discover from "../../assets/AniList/discover.svg";
import bring from "../../assets/AniList/bring.svg";
import join from "../../assets/AniList/join.svg";
import tweak from "../../assets/AniList/tweak.svg";

const features = [
  {
    Heading: "Discover your obessions",
    Body: "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
    Image: discover,
  },
  {
    Heading: "Bring AniList anywhere",
    Body: "Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.",
    Image: bring,
  },
  {
    Heading: "Join the conversation",
    Body: "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
    Image: join,
  },
  {
    Heading: "Tweak it to your liking",
    Body: "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
    Image: tweak,
  },
];

const FeatureBox = ({ heading, body, image }) => {
  return (
    <div className="h-24 flex justify-center text-start lg:my-10 my-5">
      <img className="h-24 w-24 p-2" src={image} alt="" />
      <div className="flex flex-col justify-center ml-6 mr-8">
        <span className="text-md font-bold mb-1">{heading} </span>
        <span className="text-[12px] text-[#acd5f2]">{body}</span>
      </div>
    </div>
  );
};

const LandingSection = () => {
  return (
    <div className="h-full w-full lg:px-52 lg:py-10 pb-10 relative">
      <div className="text-center w-full border h-[85%] bg-[#0a1625] border-[#0a1625] rounded-3xl lg:px-16 px-8 pt-16 pb-4">
        <div className="text-3xl font-bold mb-4">
          The next-generation anime platform
        </div>
        <div className="text-[#acd5f2] text-xl">
          Track, share, dicover your favourite
          <br />
          anime and manga with AniList
        </div>
        <div className="flex w-full flex-wrap pt-8 px-2">
          {features.map((feature, idx) => (
            <div className="md:w-1/2">
              <FeatureBox
                key={idx}
                heading={feature.Heading}
                body={feature.Body}
                image={feature.Image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-center ">
        <button className="p-2 border border-blue-500 bg-blue-500 rounded-full flex w-40">
          <span className="text-lg font-bold grow flex justify-center ">
            Join Now
          </span>
          <span className="material-icons bg-white rounded-full text-blue-500">
            navigate_next
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingSection;
