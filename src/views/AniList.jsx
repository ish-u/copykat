import Grid from "../components/AniList/Grid";
import LandingSection from "../components/AniList/LandingSection";
import NavBar from "../components/AniList/NavBar";
import SearchBar from "../components/AniList/SearchBar";
import "../styles/AniList/AniList.css";

const AniList = () => {
  return (
    <div className="font-overpass h-full w-full text-white bg-[#0b1622]">
      <NavBar />
      <LandingSection />
      <SearchBar />
      <Grid />
    </div>
  );
};

export default AniList;
