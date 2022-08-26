import { Routes, Route, Link } from "react-router-dom";
import YouTube from "./views/YouTube";
import Home from "./views/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="youtube" element={<YouTube />} />
      </Routes>
    </>
  );
}

export default App;