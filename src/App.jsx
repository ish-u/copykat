import { Routes, Route, Link } from "react-router-dom";
import YouTube from "./views/YouTube";
import Home from "./views/Home";
import Netflix from "./views/Netflix";
import AniList from "./views/AniList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="netflix" element={<Netflix />} />
        <Route path="anilist" element={<AniList />} />
      </Routes>
    </>
  );
}

export default App;
