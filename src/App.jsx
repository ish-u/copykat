import { Routes, Route, Link } from "react-router-dom";
import YouTube from "./views/YouTube";
import Home from "./views/Home";
import Netflix from "./views/Netflix";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="netflix" element={<Netflix />} />
      </Routes>
    </>
  );
}

export default App;
