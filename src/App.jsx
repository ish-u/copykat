import { Route, Routes } from "react-router-dom";
import HundredBest from "./views/100best";
import AniList from "./views/AniList";
import Home from "./views/Home";
import Netflix from "./views/Netflix";
import YouTube from "./views/YouTube";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="netflix" element={<Netflix />} />
        <Route path="anilist" element={<AniList />} />
        <Route path="100best" element={<HundredBest/>} />
      </Routes>
    </>
  );
}

export default App;
